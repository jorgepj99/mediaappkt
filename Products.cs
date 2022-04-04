using System;

namespace mediaappkt
{
    public class Products
    {

        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        public string family { get; set; }
    }
}
