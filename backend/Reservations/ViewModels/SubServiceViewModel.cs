using Reservations.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservations.ViewModels
{
    public class SubServiceViewModel
    {
        public SubServiceViewModel()
        {
            //Reservation = new HashSet<Reservation>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public int Duration { get; set; }
        public decimal Price { get; set; }
        public int ServiceId { get; set; }

        //public Service Service { get; set; }
        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
