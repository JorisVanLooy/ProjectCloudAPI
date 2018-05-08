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
    public List<Album> GetAllAlbums()
    {
        return context.Albums.ToList();
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
        
       return NoContent();

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

