using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace mediaappkt.Models
{
    public partial class ProductContext : DbContext
    {
        IConfiguration app = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .AddEnvironmentVariables()
        .Build();

        public ProductContext()
        {
        }
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        {
        }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(app["ConnectionStrings:database"]);
        }

        public DbSet<Products> products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>(entity =>
            {
                entity.HasKey(e => e.id).HasName("PrimaryKey_id");
                entity.ToTable("mediaappkt");
                entity.Property(e => e.id).HasColumnName("id");
                entity.Property(e => e.name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(250);

                entity.Property(e => e.price)
                    .IsRequired()
                    .HasColumnName("price")
                    .HasMaxLength(20);
                entity.Property(e => e.family)
                    .IsRequired()
                    .HasColumnName("family")
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);

        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
