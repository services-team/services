using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservations.ViewModels
{
    public class ReservationViewModel
    {
        public int id { get; set; }
        public DateTime startDate { get; set; }
        public SubServiceViewModel subService { get; set; }
        public string city { get; set; }
    }
}
