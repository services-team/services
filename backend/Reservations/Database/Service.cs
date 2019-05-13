using System;
using System.Collections.Generic;

namespace Reservations.Database
{
    public partial class Service
    {
        public Service()
        {
            SubService = new HashSet<SubService>();
            WeeklySchedule = new HashSet<WeeklySchedule>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }
        public string City { get; set; }
        public string FkUserId { get; set; }

        public AspNetUsers FkUser { get; set; }
        public ICollection<SubService> SubService { get; set; }
        public ICollection<WeeklySchedule> WeeklySchedule { get; set; }
    }
}
