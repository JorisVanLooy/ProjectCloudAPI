import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Album} from './Album-service'
@Injectable()
export class SongService{
    constructor(private _http: HttpClient){}
    
    _url : string = "http://localhost:5000/api/song"
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
       
        })
    };
    

    GetSongs(page: number,sort: String):Observable<Song.ISong[]>{
        return this._http.get<Song.ISong[]>(this._url+"?page="+page+"&sort="+sort)
               }
    GetOneSong(id: number):Observable<Song.ISong>{
        return this._http.get<Song.ISong>(this._url+"/"+id);
    }

    GetAlbumFromSong(id: number):Observable<Album.IAlbum>{
        return this._http.get<Album.IAlbum>(this._url+"/"+id+"/album");
    }

    PostSong(Song: object):Observable<Song.ISong>{
        
        return this._http.post<Song.ISong>(this._url,Song,this.httpOptions)
        
    }

    DeleteSong(id: number):Observable<{}>{
        return this._http.delete(this._url+"/"+id,this.httpOptions)
    }

    UpdateSong(Song: Song.ISong):Observable<Song.ISong>{
        return this._http.put<Song.ISong>(this._url,Song,this.httpOptions)
    }
    SearchSong(search: String):Observable<Song.ISong>{
        var html;
        html = "?title=";
        return this._http.get<Song.ISong>(this._url+html+search,this.httpOptions)
        
    }
}


export declare module Song{

    export interface ISong{
        id : number;
        title : String;
        album : Album.IAlbum;
    }
}        


 