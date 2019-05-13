using Reservations.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservations.ViewModels
{
    public class WeeklyScheduleViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ServiceId { get; set; }

        public Service Service { get; set; }
        public ICollection<Day> Day { get; set; }

        public  static List<WeeklyScheduleViewModel> Convert(List<WeeklySchedule> model)
        {
            return model.Select(x => new WeeklyScheduleViewModel
            {
                Id = x.Id,
                Title = x.Title,
                Day = x.Day.Select(c => new Day
                {
                    Id = c.Id,
                    WorkTime = c.WorkTime,
                    WeekDay = new WeekDays
                    {
                        Id = c.WeekDay.Id,
                        Name = c.WeekDay.Name
                    } }).ToList()
            }).ToList();
        }
    }
}
