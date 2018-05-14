using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Model
{
    public class DBInitializer
    {
        public static void Initialize(CollectionContext context)
        {
            //create db if not yet exists
            context.Database.EnsureCreated();

            if(!context.Albums.Any())
            {
                var abMadonna = new Album()
                {
                    Name = "The First Album",
                    Artist = "Madonna",
                    ReleaseYear = 1983
                };
                

                var abDavid = new Album()
                {
                    Name = "David Live",
                    Artist = "David Bowie",
                    ReleaseYear = 1984,
                    
                };
              

                var sngDavid1 = new Song()
                {
                    Title = "Rebel Rebel",
                    Album = abDavid

                }; 

                var sngDavid2 = new Song()
                {
                    Title = "Moonage Daydream",
                    Album = abDavid
                };

                var sngDavid3 = new Song()
                {
                    Title = "Sweet Thing",
                    Album = abDavid
                };
           

                var sngMadonna1 = new Song()
                {
                    Title = "Lucky Star",
                    Album = abMadonna
                };

                var sngMadonna2 = new Song()
                {
                    Title = "Borderline",
                    Album = abMadonna
                };

                var sngMadonna3 = new Song()
                {
                    Title = "Burning Up",
                    Album = abMadonna
                };

                context.Albums.Add(abMadonna);
                context.Albums.Add(abDavid);
                context.Songs.Add(sngDavid1);
                context.Songs.Add(sngDavid2);
                context.Songs.Add(sngDavid3);
                context.Songs.Add(sngMadonna1);
                context.Songs.Add(sngMadonna2);
                context.Songs.Add(sngMadonna3);
                //save all the changes to the DB
                context.SaveChanges();
                
            }
        }
    }
}