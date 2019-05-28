using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reservations.Database;
using Reservations.ViewModels;

namespace Reservations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {

        public ReservationController()
        {
        }

        // GET: api/Reservations
        [HttpGet]
        public IEnumerable<Reservation> GetReservation()
        {
            return new ServicesDbContext().Reservation.ToList();
        }

        // GET: api/Reservations/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReservation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reservation = await new ServicesDbContext().Reservation.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            return Ok(reservation);
        }

        // PUT: api/Reservations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservation([FromRoute] int id, [FromBody] Reservation reservation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reservation.Id)
            {
                return BadRequest();
            }

            var context = new ServicesDbContext();

            context.Entry(reservation).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
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

        // POST: api/Reservations
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostReservation([FromBody] dynamic reservation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Reservation result = new Reservation();
            string objektas = reservation.ToString();
            string date = objektas.Substring(objektas.IndexOf("reservationTime") + 19).Split(new char[1] { '\"' }, StringSplitOptions.RemoveEmptyEntries)[0];
            int subServiceId = Convert.ToInt32(objektas.Substring(objektas.IndexOf("subServiceId") + 15).Split(new char[1] { ',' }, StringSplitOptions.RemoveEmptyEntries)[0]);

            result.FkUserId = User.Claims.First(x => x.Type == "UserID").Value;
            result.StartDate = DateTime.Parse(date);
            result.SubServiceId = subServiceId;

            //reservation.FkUserId = User.Claims.First(x => x.Type == "UserID").Value;

            if (!IsValidReservation(result))
            {
                return BadRequest("Laikass uzimtas");
            }

            var context = new ServicesDbContext();

            context.Reservation.Add(result);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetReservation", new { id = reservation.Id }, reservation);
        }

        // DELETE: api/Reservations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var context = new ServicesDbContext();

            var reservation = await context.Reservation.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            context.Reservation.Remove(reservation);
            await context.SaveChangesAsync();

            return Ok(reservation);
        }

        // GET: api/Reservation/MyReservations
        [HttpGet]
        [Authorize]
        [Route("MyReservations")]
        public IEnumerable<ReservationViewModel> MyReservations()
        {
            var context = new ServicesDbContext();

            var userid = User.Claims.First(x => x.Type == "UserID").Value;

            var result = context.Reservation.Include("SubService.Service").Where(x => x.FkUserId == userid).ToList();

            var rezult = new List<ReservationViewModel>();
            foreach (Reservation res in result)
            {
                rezult.Add(new ReservationViewModel()
                {
                    id = res.Id,
                    city = res.SubService.Service.City,
                    startDate = res.StartDate,
                    subService = new SubServiceViewModel()
                    {
                        Duration = res.SubService.Duration,
                        Id = res.SubService.Id,
                        Price = res.SubService.Price,
                        Title = res.SubService.Title
                    }
                });
            }

            return rezult;
        }

        // GET: api/Reservation/ReservationsForMe
        [HttpGet]
        [Authorize]
        [Route("ReservationsForMe")]
        public IEnumerable<ReservationForMeViewModel> ReservationsForMe()
        {
            var context = new ServicesDbContext();

            var userid = User.Claims.First(x => x.Type == "UserID").Value;

            var result = context.Reservation.Include("SubService.Service").Include("FkUser").Where(x => x.SubService.Service.FkUserId == userid).ToList();

            var rezult = new List<ReservationForMeViewModel>();
            foreach (Reservation res in result)
            {
                rezult.Add(new ReservationForMeViewModel()
                {
                    clientFullName = res.FkUser.FullName,
                    startDate = res.StartDate,
                    subService = new SubServiceViewModel()
                    {
                        Duration = res.SubService.Duration,
                        Id = res.SubService.Id,
                        Price = res.SubService.Price,
                        Title = res.SubService.Title
                    }
                });
            }

            return rezult;
        }

        private bool ReservationExists(int id)
        {
            return new ServicesDbContext().Reservation.Any(e => e.Id == id);
        }

        private bool IsValidReservation(Reservation reservation)
        {
            var context = new ServicesDbContext();

            var schedule = context.SubService.Where(x => x.Id == reservation.SubServiceId).Include("Service.FkUser.WeeklySchedule.Day.WorkTime").ToList().First().Service.FkUser.WeeklySchedule.First();

            short kelintadienis = Convert.ToInt16(reservation.StartDate.DayOfWeek);

            var workTimes = new List<WorkTime>();

            try
            {
                workTimes = schedule.Day.Where(x => x.WeekDayId == kelintadienis).First().WorkTime.ToList();//reservation.SubService.Service.FkUser.WeeklySchedule.First().Day.ElementAt(kelintadienis - 1).WorkTime.ToList();
            }
            catch (InvalidOperationException)
            {
                return false;
            }

            //DATOS NETIKRINU, TIK LAIKA 

            var subservisai = context.SubService.ToList();

            int start = reservation.StartDate.TimeOfDay.Minutes + (reservation.StartDate.TimeOfDay.Hours * 60);

            int end = start + subservisai.Where(x => x.Id == reservation.SubServiceId).First().Duration;//reservation.SubService.Duration;

            bool valid = false;

            foreach (var timespan in workTimes)
            {
                if (start >= timespan.MinutesFrom && end <= timespan.MinutesTo)
                    valid = true;
            }

            if (valid)
            {
                var tiekejo_id = context.SubService.Where(s => s.Id == reservation.SubServiceId).Include("Service.FkUser").First().Service.FkUser.Id;
                var reservations = context.Reservation.Include("SubService.Service.FkUser").Where(x => x.SubService.Service.FkUser.Id == tiekejo_id).ToList();
                foreach (var res in reservations)
                {
                    if (reservation.StartDate.Date == res.StartDate.Date)
                    {
                        int res_start = res.StartDate.TimeOfDay.Minutes + (res.StartDate.TimeOfDay.Hours * 60);

                        int res_end = res_start + subservisai.Where(x => x.Id == res.SubServiceId).First().Duration;

                        if (!(end <= res_start || res_end <= start))
                            valid = false;
                    }
                }
                return valid;
            }
            return false;
        }
    }
}