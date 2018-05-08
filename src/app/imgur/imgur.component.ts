import { Component, OnInit } from '@angular/core';
import {ImgurService,Imgur} from '../services/Imgur-service'
@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  searchTerm: String = 'cat';
  sort: String = 'time';
  page: String = '1';
  data: Imgur.IDatum[];


  constructor(private service: ImgurService) { }

  SearchGallery(): void{
    this.data = null;
    this.service.getGalerySearch(this.searchTerm,this.sort,this.page)
    .subscribe(d => this.data = d.data);
  }

  ngOnInit() {
    
  }

}
