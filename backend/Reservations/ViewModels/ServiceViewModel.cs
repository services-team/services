using Reservations.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservations.ViewModels
{
    public class ServiceViewModel
    {
        public ServiceViewModel()
        {
            SubServices = new HashSet<SubServiceViewModel>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }
        public string City { get; set; }
        public string FkUserId { get; set; }

        //public AspNetUsers FkUser { get; set; }
        public WeeklyScheduleViewModel schedule { get; set; }
        public ICollection<SubServiceViewModel> SubServices { get; set; }

        public static ServiceViewModel Convert(Service input)
        {
            WeeklySchedule temp = input.FkUser.WeeklySchedule.First();
            return new ServiceViewModel()
            {
                City = input.City,
                Title = input.Title,
                Description = input.Description,
                PriceFrom = input.PriceFrom,
                PriceTo = input.PriceTo,
                SubServices = input.SubService.Select(x => new SubServiceViewModel() {
                    Id = x.Id,
                    Title = x.Title,
                    Duration = x.Duration,
                    Price = x.Price,
                    ServiceId = input.Id
                }).ToList(),
                //schedule = new WeeklyScheduleViewModel()
                //{
                //    Id = temp.Id,
                //    Title = temp.Title,
                //    FkUserId = temp.FkUserId,
                //    Day = temp.Day.Select(x => new DayViewModel()
                //    {
                //        Id = x.Id,

                //    }).ToList(),
                //}
                schedule = WeeklyScheduleViewModel.Convert(input.FkUser.WeeklySchedule.ToList()).First()
            };
        }
    }
}
