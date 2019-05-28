using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservations.ViewModels
{
    public class ReservationForMeViewModel
    {
        public string clientFullName { get; set; }
        public SubServiceViewModel subService { get; set; }
        public DateTime startDate { get; set; }
    }
}
