using System;
using System.Collections.Generic;

namespace Reservations.Database
{
    public partial class Reservation
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public int SubServiceId { get; set; }

        public SubService SubService { get; set; }
    }
}
