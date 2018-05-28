import { Component, OnInit } from '@angular/core';
import {SongService,Song} from '../services/Song-service';
@Component({
  selector: 'app-test-song',
  templateUrl: './test-song.component.html',
  styleUrls: ['./test-song.component.css']
})
export class TestSongComponent implements OnInit {

  page: number = 0;
  sort: String = 'asc';
  id : number = 1;
  _id : number;
  Id : number;
  Title : String;
  songData : Song.ISong[];
  songObject: Song.ISong;
  songPostResponse : Song.ISong;
  title: String;
  postsong : object;
  search: String;
  searchObject : Song.ISong;
  constructor(private service:SongService) { }

  ngOnInit() {

  
  }
  GetSongs(): void{
    if(this.id == null){
      this.service.GetSongs(this.page,this.sort)
      .subscribe(d => this.songData = d);
      this.songObject = null;
    }else{
      this.service.GetOneSong(this.id)
      .subscribe(d => this.songObject = d);
      this.songData = null;
    }
  }

  SearchSong():void{
    this.service.SearchSong(this.search)
    .subscribe(d => this.searchObject = d);
  }

  PostSong():void{
    this.postsong  = {     
          "title": this.title
      }
    this.service.PostSong(this.postsong)
    .subscribe(d => this.songPostResponse = d);
  }

  DeleteSong():void{
    this.service.DeleteSong(this._id)
    .subscribe();
  }

}
