import { Component, OnInit } from '@angular/core';
import {AlbumService,Album} from '../services/Album-service';
@Component({
  selector: 'app-test-rest',
  templateUrl: './test-rest.component.html',
  styleUrls: ['./test-rest.component.css']
})
export class TestRestComponent implements OnInit {

  AlbumData : Album.IAlbum;

  constructor(private service:AlbumService) { }

  ngOnInit() {

  
  }
  GetAllAlbums(): void{
    this.service.GetAllAlbums()
    .subscribe(d => this.AlbumData = d);
  }

}
