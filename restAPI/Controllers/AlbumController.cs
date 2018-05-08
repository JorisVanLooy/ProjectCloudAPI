using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Model;

[Route("api/album")]
public class AlbumController : Controller
{
    private readonly CollectionContext context;
    public AlbumController(CollectionContext context)
    {
        this.context = context;
    }


    [Route("{id}")]   // api/album/2
    [HttpGet]
    public IActionResult GetAlbum(int id)
    {
        var album = context.Albums.Find(id);
        if (album == null)
            return NotFound();

        return Ok(album);
    }

    [HttpGet]         // api/album
    public List<Album> GetAllAlbums(int releaseYear, string name, string artist, int? page,string sort, int length = 2,string dir = "asc")
    {
        IQueryable<Album> q = context.Albums;

        if(releaseYear != 0)
            q = q.Where(d => d.ReleaseYear == releaseYear);
        if(!string.IsNullOrWhiteSpace(name))
            q = q.Where(d => d.Name == name);
        if(!string.IsNullOrWhiteSpace(artist))
            q = q.Where(d => d.Artist == artist);

        switch(sort)
        {
            case "name":
                if(dir == "adc")
                    q = q.OrderBy(d => d.Name);
                else if(dir == "desc")
                    q = q.OrderByDescending(d => d.Name);
                break;
            case "releaseYear":
                if(dir == "adc")
                    q = q.OrderBy(d => d.ReleaseYear);
                else if(dir == "desc")
                    q = q.OrderByDescending(d => d.ReleaseYear);
                break;
        }

        if(page.HasValue)
            q = q.Skip(page.Value * length);
        q = q.Take(length);

        return q.ToList();
    }

    

    [Route("{id}")] //api/album/2
    [HttpDelete]
    public IActionResult DeleteAlbum(int id)
    {
        var album = context.Albums.Find(id);
        if (album == null)
            return NotFound();
        
        context.Albums.Remove(album);
        context.SaveChanges();
        return NoContent();
    }

    [HttpPost]
    public IActionResult CreateAlbum([FromBody] Album newAlbum)
    {
        
       context.Albums.Add(newAlbum);
       context.SaveChanges();
       return Created("", newAlbum);

    }

    [HttpPut]
    public IActionResult UpdateAlbum([FromBody] Album updateAlbum)
    {
        var orgAlbum = context.Albums.Find(updateAlbum.Id);
        if (orgAlbum == null)
            return NotFound();

        orgAlbum.Name = updateAlbum.Name;
        orgAlbum.Artist = updateAlbum.Artist;
        orgAlbum.ReleaseYear = updateAlbum.ReleaseYear;

        context.SaveChanges();
        return Ok(orgAlbum);
    }
}

