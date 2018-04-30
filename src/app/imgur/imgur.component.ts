import { Component, OnInit } from '@angular/core';
import {ImgurService,Imgur} from '../services/Imgur-service'
@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  searchTerm: String = 'cat';
  data: Imgur.IDatum[];

  constructor(private service: ImgurService) { }

  SearchGallery(): void{
    this.service.getGalerySearch(this.searchTerm)
    .subscribe(d => this.data = d.data);
  }

  ngOnInit() {
    
  }

}
