using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Model;

[Route("api/song")]
public class SongController : Controller
{
    private readonly CollectionContext context;
    public SongController(CollectionContext context)
    {
        this.context = context;
    }


    [Route("{id}")]   // api/song/2
    [HttpGet]
    public IActionResult Getsong(int id)
    {
        var song = context.Songs.Find(id);
        if (song == null)
            return NotFound();

        return Ok(song);
    }

    [HttpGet]         // api/song
    public List<Song> GetAllsongs()
    {
        return context.Songs.ToList();
    }

    [Route("{id}")] //api/song/2
    [HttpDelete]
    public IActionResult Deletesong(int id)
    {
        var song = context.Songs.Find(id);
        if (song == null)
            return NotFound();
        
        context.Songs.Remove(song);
        context.SaveChanges();
        return NoContent();
    }

    [HttpPost]
    public IActionResult Createsong([FromBody] Song newsong)
    {
        
       return NoContent();

    }

    [HttpPut]
    public IActionResult Updatesong([FromBody] Song updatesong)
    {
        var orgsong = context.Songs.Find(updatesong.Id);
        if (orgsong == null)
            return NotFound();

        orgsong.Title = updatesong.Title;
        orgsong.Album = updatesong.Album;

        context.SaveChanges();
        return Ok(orgsong);
    }
}

