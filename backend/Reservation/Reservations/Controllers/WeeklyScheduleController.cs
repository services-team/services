using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reservations.Database;
using Reservations.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Reservations.Viewmodels;

namespace Reservations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeeklyScheduleController : ControllerBase
    {
        // GET: api/WeeklySchedule
        [HttpGet]
        public IEnumerable<WeeklyScheduleViewModel> GetWeeklySchedule()
        {
            var context = new ServicesDbContext();

            //var a = context.WeeklySchedule.Include("Day.WeekDay").ToList();
            var a = context.WeeklySchedule.Include("Day.WeekDay").Include("FkUser").Include("Day.WorkTime").ToList();

            List<WeeklyScheduleViewModel> asd = WeeklyScheduleViewModel.Convert(a);

            return asd;
        }

        // GET: api/WeeklySchedule/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWeeklySchedule([FromRoute] int id)
        {
            var _context = new ServicesDbContext();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var WeeklySchedule = await _context.WeeklySchedule.FindAsync(id);

            if (WeeklySchedule == null)
            {
                return NotFound();
            }

            return Ok(WeeklySchedule);
        }

        // PUT: api/WeeklySchedule/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWeeklySchedule([FromRoute] int id, [FromBody] WeeklySchedule WeeklySchedule)
        {
            var _context = new ServicesDbContext();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != WeeklySchedule.Id)
            {
                return BadRequest();
            }

            foreach (Day diena in WeeklySchedule.Day)
            {
                foreach (WorkTime time in diena.WorkTime)
                {
                    if (time.Id == 0)
                        _context.WorkTime.Add(new WorkTime()
                        {
                            DayId = diena.Id,
                            MinutesFrom = time.MinutesFrom,
                            MinutesTo = time.MinutesTo,
                        });
                }
            }

            //_context.Entry(WeeklySchedule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeeklyScheduleExists(id))
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

        // POST: api/WeeklySchedule
        [HttpPost]
        public async Task<IActionResult> PostWeeklySchedule([FromBody] WeeklySchedule WeeklySchedule)
        {
            var _context = new ServicesDbContext();

            WeeklySchedule.FkUserId = User.Claims.First(x => x.Type == "UserID").Value;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WeeklySchedule.Add(WeeklySchedule);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWeeklySchedule", new { id = WeeklySchedule.Id }, WeeklySchedule);
        }

        // DELETE: api/WeeklySchedule/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWeeklySchedule([FromRoute] int id)
        {
            var _context = new ServicesDbContext();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var WeeklySchedule = await _context.WeeklySchedule.FindAsync(id);
            if (WeeklySchedule == null)
            {
                return NotFound();
            }

            _context.WeeklySchedule.Remove(WeeklySchedule);
            await _context.SaveChangesAsync();

            return Ok(WeeklySchedule);
        }

        // GET: api/WeeklySchedule/MySchedule
        [HttpGet]
        [Authorize]
        [Route("MySchedule")]
        public async Task<WeeklyScheduleViewModel> MySchedule()
        {
            var context = new ServicesDbContext();

            var userId = User.Claims.First(x => x.Type == "UserID").Value;

            try
            {
                var res = context.WeeklySchedule.Include("Day.WorkTime").Include("Day.WeekDay").Where(x => x.FkUserId == userId).First();
                return new WeeklyScheduleViewModel()
                {
                    Day = res.Day.Select(x => new DayViewModel()
                    {
                        Id = x.Id,
                        WeekDay = new WeekDayViewModel()
                        {
                            Id = x.WeekDay.Id,
                            Name = x.WeekDay.Name
                        },
                        WorkTime = x.WorkTime.Select(y => new WorkTimeViewModel()
                        {
                            Id = y.Id,
                            MinutesFrom = y.MinutesFrom,
                            MinutesTo = y.MinutesTo
                        }).ToList()
                    }).ToList(),
                    FkUserId = res.FkUserId,
                    Id = res.Id,
                    Title = res.Title
                };
            }
            catch (InvalidOperationException) // jei useris neturi schedule
            {
                var naujas = new WeeklySchedule()
                {
                    Title = "Tvarkarastis",
                    FkUserId = userId,
                };
                context.WeeklySchedule.Add(naujas);
                await context.SaveChangesAsync();
                int scheduleid = context.WeeklySchedule.Where(x => x.FkUserId == userId).First().Id;
                List<Day> dienos = new List<Day>()
                    {
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 1,
                        },
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 2,
                        },
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 3,
                        },
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 4,
                        },
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 5,
                        },
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 6,
                        },
                        new Day()
                        {
                            ScheduleId = scheduleid,
                            WeekDayId = 7,
                        }
                };

                context.AddRange(dienos);
                await context.SaveChangesAsync();
            }
            var newSchedule = context.WeeklySchedule.Include("Day.WorkTime").Include("Day.WeekDay").Where(x => x.FkUserId == userId).First();
            return new WeeklyScheduleViewModel()
            {
                Day = newSchedule.Day.Select(x => new DayViewModel()
                {
                    Id = x.Id,
                    WeekDay = new WeekDayViewModel()
                    {
                        Id = x.WeekDay.Id,
                        Name = x.WeekDay.Name
                    },
                    WorkTime = x.WorkTime.Select(y => new WorkTimeViewModel()
                    {
                        Id = y.Id,
                        MinutesFrom = y.MinutesFrom,
                        MinutesTo = y.MinutesTo
                    }).ToList()
                }).ToList(),
                FkUserId = newSchedule.FkUserId,
                Id = newSchedule.Id,
                Title = newSchedule.Title
            };
        }

        private bool WeeklyScheduleExists(int id)
        {
            var _context = new ServicesDbContext();
            return _context.WeeklySchedule.Any(e => e.Id == id);
        }
    }
}