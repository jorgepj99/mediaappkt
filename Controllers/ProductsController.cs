using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mediaappkt.Models;
namespace mediaappkt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Products> GetList()
        {
            ProductContext db = new ProductContext();
            return db.products;
        }
        [HttpPost]
        public bool Post([FromBody] AddProduct product)
        {
            bool result = false;
            return result;
        }
    }
}
