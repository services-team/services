﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reservations.Models;

namespace Reservations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //Scaffold-DbContext "Data Source=LAPTOP-TDDK5T0K\SERVERISSQL;Initial Catalog=ServicesDb; Integrated Security=True" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Database
    //Update-Database -ConnectionString "data source=server_name;initial Catalog=ServicesD; Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework" -ConnectionProviderName "System.Data.SqlClient" -Verbose
    public class ValuesController : ControllerBase
    {
        public ValuesController(AuthenticationContext context)
        {

        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
