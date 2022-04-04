using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mediaappkt.Models;
namespace mediaappkt.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ProductsController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Products> GetList()
        {
            ProductContext db = new ProductContext();
            return db.products;
        }
        [HttpPost]
        public bool add([FromBody] AddProduct product)
        {
            ProductContext db = new ProductContext();
            Products data = new Products();
            data.name = product.name;
            data.family = product.family;
            data.description = product.description;
            data.price = product.price;
            db.Add(data);
            return db.SaveChanges() == 1 ? true : false;
        }
    }
}
