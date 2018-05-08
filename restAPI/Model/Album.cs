using System.Collections.Generic;

namespace Model
{
    public class Album
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public string Artist {get; set;}
        public int ReleaseYear {get;set;}
        public ICollection<Song> Songs {get; set;}
    }
}