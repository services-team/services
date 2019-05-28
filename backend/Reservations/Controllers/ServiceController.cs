using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reservations.Database;
using Microsoft.AspNetCore.Identity;
using Reservations.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Reservations.ViewModels;
using Reservations.Viewmodels;

namespace Reservations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ServiceController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        // GET: api/Service
        [HttpGet]
        public IEnumerable<Service> GetService()
        {
            var context = new ServicesDbContext();

            var xx = context.Service.Include("SubService").Where(x => x.SubService.Count() > 0).ToList();

            List<Service> result = new List<Service>();
            foreach (var xxx in xx)
            {
                result.Add(new Service()
                {
                    City = xxx.City,
                    Description = xxx.Description,
                    FkUserId = xxx.FkUserId,
                    Id = xxx.Id,
                    PriceFrom = xxx.PriceFrom,
                    PriceTo = xxx.PriceTo,
                    Title = xxx.Title
                });
            }

            return result;
        }

        // GET: api/Service/MyServices
        [HttpGet]
        [Authorize]
        [Route("MyServices")]
        public IEnumerable<Service> MyServices()
        {
            var context = new ServicesDbContext();

            var userId = User.Claims.First(x => x.Type == "UserID").Value;

            return context.Service.Where(x => x.FkUserId == userId).ToList();
        }

        //// GET: api/Service/FullService/5
        //[HttpGet("{serviceid}")]
        //[Route("FullService/{serviceid}")]
        //public Service FullService([FromRoute]string serviceid)
        //{
        //    var context = new ServicesDbContext();

        //    //var userId = User.Claims.First(x => x.Type == "UserID").Value;
        //    var result = context.Service.Where(x => x.Id == serviceid).Include("SubService").Include("FkUser.WeeklySchedule").First();

        //    return result;
        //}



        // GET: api/Service/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetService([FromRoute] int id)
        {
            var _context = new ServicesDbContext();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var service = await _context.Service.Where(x => x.Id == id).Include("SubService").Include("FkUser.WeeklySchedule.Day.WeekDay").Include("FkUser.WeeklySchedule.Day.WorkTime").FirstAsync();


            var result = ServiceViewModel.Convert(service);
            result.schedule = TrimSchedule(service);

            if (service == null)
            {
                return NotFound();
            }

            return Ok(result);
        }



        // PUT: api/Service/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutService([FromRoute] int id, [FromBody] Service service)
        {
            var _context = new ServicesDbContext();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //if (id != service.Id)
            //{
            //    return BadRequest();
            //}
            service.Id = id;

            service.FkUserId = User.Identities.First().Claims.First(x => x.Type == "UserID").Value;

            _context.Entry(service).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Service
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostService([FromBody] Service service)
        {
            var _context = new ServicesDbContext();

            service.FkUserId = User.Identities.First().Claims.First(x => x.Type == "UserID").Value;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Service.Add(service);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetService", new { id = service.Id }, service);
        }

        // DELETE: api/Service/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteService([FromRoute] int id)
        {
            var _context = new ServicesDbContext();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var service = await _context.Service.FindAsync(id);
            if (service == null)
            {
                return NotFound();
            }

            _context.Service.Remove(service);
            await _context.SaveChangesAsync();

            return Ok(service);
        }

        private bool ServiceExists(int id)
        {
            var _context = new ServicesDbContext();
            return _context.Service.Any(e => e.Id == id);
        }



        /// <summary>
        /// Apkarpyt tvarkarascius, atsizvelgiant i rezervacijas
        /// </summary>
        /// <param name = "scheduleId" ></ param >
        /// < returns ></ returns >
        private WeeklyScheduleViewModel TrimSchedule(Service service)
        {
            var context = new ServicesDbContext();

            var tiekejo_id = service.FkUserId;
            
            var servico_rezervacijos = context.Reservation.Include("SubService.Service.FkUser").Where(x => x.SubService.Service.FkUserId == tiekejo_id).ToList();

            var result = context.WeeklySchedule.Include("Day.WorkTime").Include("Day.WeekDay").Where(x => x.FkUserId == tiekejo_id).First();

            WeeklyScheduleViewModel rezultatas = new WeeklyScheduleViewModel()
            {
                Title = result.Title,
                FkUserId = result.FkUserId,
                Day = result.Day.Select(x => new DayViewModel()
                {
                    Id = x.Id,
                    WeekDay = new WeekDayViewModel()
                    {
                        Id = x.WeekDay.Id,
                        Name = x.WeekDay.Name,
                    },
                    WorkTime = x.WorkTime.Select(y => new WorkTimeViewModel()
                    {
                        Id = y.Id,
                        MinutesFrom = y.MinutesFrom,
                        MinutesTo = y.MinutesTo,
                    }).ToList(),
                }).ToList(),
            };

            int[][] laikai = new int[servico_rezervacijos.Count()][];
            for (int i = 0; i < servico_rezervacijos.Count(); i++)
            {
                laikai[i] = new int[2];
                laikai[i][0] = servico_rezervacijos[i].StartDate.Minute + (servico_rezervacijos[i].StartDate.Hour * 60); // laiko pradzia
                laikai[i][1] = servico_rezervacijos[i].SubService.Duration + laikai[i][0]; // laiko pabaiga
            }

            for (int i = 0; i < result.Day.Count(); i++)
            {
                for (int j = 0; j < servico_rezervacijos.Count(); j++)
                {
                    if (Convert.ToInt16(servico_rezervacijos.ElementAt(j).StartDate.DayOfWeek) == i + 1)
                    {
                        for (int k = 0; k < result.Day.ElementAt(i).WorkTime.Count(); k++)
                        {
                            if (result.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesFrom == laikai[j][0]) // jeigu workTime'o pradzia sutampa su rezervacijos pradzia
                            {
                                if (result.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesTo == laikai[j][1]) // jeigu workTime'o galas sutampa su rezervacijos galu
                                {
                                    //rezultatas.Day.ElementAt(i).WorkTime.Remove(result.Day.ElementAt(i).WorkTime.ElementAt(k));

                                    WorkTime timeToRemove = result.Day.ElementAt(i).WorkTime.ElementAt(k);
                                    rezultatas.Day.ElementAt(i).WorkTime.Remove(new WorkTimeViewModel()
                                    {
                                        Id = timeToRemove.Id,
                                        MinutesFrom = timeToRemove.MinutesFrom,
                                        MinutesTo = timeToRemove.MinutesTo
                                    });
                                }   
                                else if (result.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesTo > laikai[j][1]) // jeigu workTime'o galas veliau nei rezervacijos galas
                                    rezultatas.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesFrom = laikai[j][1];
                            }
                            else // jeigu workTime'o pradzia yra zemiau uz rezervacijos pradzia
                            {
                                if (result.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesTo == laikai[j][1]) // jeigu workTime'o galas sutampa su rezervacijos galu
                                {
                                    rezultatas.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesTo = laikai[j][0];
                                }
                                else // jeigu rezervacija isiterpusi i workTime'o viduri
                                {
                                    rezultatas.Day.ElementAt(i).WorkTime.Add(new WorkTimeViewModel()
                                    {
                                        //DayId = result.Day.ElementAt(i).Id,
                                        MinutesTo = result.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesTo,
                                        MinutesFrom = laikai[j][1]
                                    });
                                    rezultatas.Day.ElementAt(i).WorkTime.ElementAt(k).MinutesTo = laikai[j][0];
                                }
                            }
                        }
                    }
                } 
            }
            return rezultatas;
        }
    }
}