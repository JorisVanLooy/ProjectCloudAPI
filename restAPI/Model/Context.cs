using Microsoft.EntityFrameworkCore;


namespace Model 
{
    public class CollectionContext: DbContext
    {
         public CollectionContext (DbContextOptions<CollectionContext> options): base(options)
         {
            
         }

        public DbSet<Album> Albums {get; set;}
        public DbSet<Song> Songs {get;set;}
    }

}