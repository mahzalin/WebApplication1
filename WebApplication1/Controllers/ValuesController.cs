using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
  
namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET array
        [HttpGet("/api/array")]
        public List<string> GetArray()
        {
            List<string> myList = new List<string>();
            myList.Add("niloofar1");
            myList.Add("niloofar2");
            myList.Add("niloofar3");
            myList.Add("niloofar4");
            return myList;
        }

        // GET int
        [HttpGet("/api/int-value/{id}")]
        public int GetInt(int id)
        {
            return id;
        }

        // GET string
        [HttpGet("/api/string-value/{tmp}")]
        public string GetString(string tmp)
        {
            string result = "Hello " + tmp;
            return result;
        }

        public class Person
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public Person(string name, int age)
            {
                Name = name;
                Age = age;
            }
            //Other properties, methods, events...
        }
        
        // GET object
        [HttpGet("/api/object")]
        public object GetObject()
        {
            Person person1 = new Person("niloofar", 26);
            return person1;
        }

        [HttpGet("/api/int-value2")]
        [HttpGet("/api/int-value2/{id}")]
        public int GetInt2(int id=1)
        {
            return id;
        }
    }
}
