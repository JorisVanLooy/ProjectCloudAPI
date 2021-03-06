import { Component, OnInit } from '@angular/core';
import {AlbumService,Album} from '../services/Album-service';
@Component({
  selector: 'app-test-album',
  templateUrl: './test-album.html',
  styleUrls: ['./test-album.css']
})
export class TestAlbumComponent implements OnInit {

  sort: String = 'name';
  page: number = 0;
  id : number;
  _id : number;
  Id : number = 3;
  albumData : Album.IAlbum[];
  albumObject: Album.IAlbum;
  searchObject: Album.IAlbum;
  albumPostResponse : Album.IAlbum;
  name: String = "Album name";
  artist: String = "Artist name";
  releaseYear = 9999;
  postAlbum : object;
  updateAlbum : Album.IAlbum;
  updateResponse: Album.IAlbum;
  Name: String = "Album name";
  Artist: String = "Artist name";
  ReleaseYear = 9999;
  search : String = "artist";
  searchTerm : String;

  constructor(private service:AlbumService) { }

  ngOnInit() {

  
  }
  GetAlbums(): void{
    if(this.id == null){
      this.service.GetAlbums(this.sort,this.page)
      .subscribe(d => this.albumData = d);
      this.albumObject = null;
    }else{
      this.service.GetOneAlbum(this.id)
      .subscribe(d => this.albumObject = d);
      this.albumData = null;
    }
  }

  SearchAlbum(): void{
    this.service.SearchAlbum(this.search,this.searchTerm)
    .subscribe(d => this.searchObject = d);

  }

  PostAlbum():void{
    this.postAlbum  = {     
          "name": this.name,
          "artist": this.artist,
          "releaseYear": this.releaseYear
      }
    this.service.PostAlbum(this.postAlbum)
    .subscribe(d => this.albumPostResponse = d);
    this.id = this.albumPostResponse.id;
  }

  DeleteAlbum():void{
    this.service.DeleteAlbum(this._id)
    .subscribe();
  }

  UpdateAlbum():void{
    this.updateAlbum = {
      id : this.Id,
      name : this.Name,
      artist : this.Artist,
      releaseYear : this.ReleaseYear

    }
    this.service.UpdateAlbum(this.updateAlbum)
    .subscribe(d => this.updateResponse = d);
  }

}
