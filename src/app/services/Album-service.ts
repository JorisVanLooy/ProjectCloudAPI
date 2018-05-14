import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
@Injectable()
export class AlbumService{
    constructor(private _http: HttpClient){}
    
    GetAllAlbums():Observable<Album.IAlbum>{
        return this._http.get<Album.IAlbum>("http://localhost:5000/api/album")
    }
}


export declare module Album{
    export interface IAlbum{
        id : number;
        name : string;
        artist : string;
        releaseYear : number;
    }

    export interface ISong{
        id : number;
        title : string;
        album : IAlbum;
    }
}        


 