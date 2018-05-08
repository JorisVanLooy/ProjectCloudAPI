using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        var song = context.Songs
                    .Include(d => d.Album)
                    .SingleOrDefault(d => d.Id == id);
        if (song == null)
            return NotFound();

        return Ok(song);
    }

    [HttpGet]         // api/song
    public List<Song> GetAllsongs(string title, int? page,string sort, int length = 2,string dir = "asc")
    {
        IQueryable<Song> q = context.Songs;

        if(!string.IsNullOrWhiteSpace(title))
            q = q.Where(d => d.Title == title);

        if(dir == "asc")
            q = q.OrderBy(d => d.Title);
        else if (dir == "desc")
            q = q.OrderByDescending(d => d.Title);
        
        if(page.HasValue)
            q = q.Skip(page.Value * length);
        q = q.Take(length);

        return q.ToList();
    }

    [Route("{id}/album")]
    [HttpGet]
    public IActionResult GetSongAlbum(int id)
    {
        var album = context.Songs.Find(id)
                    .Album;
                    
        if (album == null)
            return NotFound();

        return Ok(album);
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
        
       context.Songs.Add(newsong);
       context.SaveChanges();
       return Created("", newsong);

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

