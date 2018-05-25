import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import {RequestOptions, Request, RequestMethod} from '@angular/http';
@Injectable()
export class AlbumService{
    constructor(private _http: HttpClient){}
    
    _url : string = "http://localhost:5000/api/album"
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
       
        })
    };
    

    GetAlbums(sort: String, page: number):Observable<Album.IAlbum[]>{
        return this._http.get<Album.IAlbum[]>(this._url+"?sort="+sort+"&page="+page)
               }
    GetOneAlbum(id: number):Observable<Album.IAlbum>{
        return this._http.get<Album.IAlbum>(this._url+"/"+id);
    }


    PostAlbum(album: object):Observable<Album.IAlbum>{
        
        return this._http.post<Album.IAlbum>(this._url,album,this.httpOptions)
        
    }

    DeleteAlbum(id: number):Observable<{}>{
        return this._http.delete(this._url+"/"+id,this.httpOptions)
    }

    UpdateAlbum(album: Album.IAlbum):Observable<Album.IAlbum>{
        return this._http.put<Album.IAlbum>(this._url,album,this.httpOptions)
    }
}


export declare module Album{

    export interface IAlbum{
        id : number;
        name : string;
        artist : string;
        releaseYear : number;
    }
}        


 