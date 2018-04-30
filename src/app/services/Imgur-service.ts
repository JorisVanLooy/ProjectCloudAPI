import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs/Observable";

@Injectable()
export class ImgurService{
    constructor(private _http: HttpClient){}
    
    getGalerySearch(search): Observable<Imgur.IGallery>{
        return this._http.get<Imgur.IGallery>("https://api.imgur.com/3/gallery/search/?q=" + search,
    {
        headers: new HttpHeaders().set('Authorization','Client-ID 62bdfcd99606322')
    });
    }
}



export declare module Imgur{    
        export interface IDescriptionAnnotations {
        }
    
        export interface ITag {
            name: string;
            display_name: string;
            followers: number;
            total_items: number;
            following: boolean;
            background_hash: string;
            thumbnail_hash?: any;
            accent: string;
            background_is_animated: boolean;
            thumbnail_is_animated: boolean;
            is_promoted: boolean;
            description: string;
            logo_hash?: any;
            logo_destination_url?: any;
            description_annotations: IDescriptionAnnotations;
        }
    
        export interface IProcessing {
            status: string;
        }
    
        export interface Iimage {
            id: string;
            title?: any;
            description: string;
            datetime: number;
            type: string;
            animated: boolean;
            width: number;
            height: number;
            size: number;
            views: number;
            bandwidth: any;
            vote?: any;
            favorite: boolean;
            nsfw?: any;
            section?: any;
            account_url?: any;
            account_id?: any;
            is_ad: boolean;
            in_most_viral: boolean;
            has_sound: boolean;
            tags: any[];
            ad_type: number;
            ad_url: string;
            in_gallery: boolean;
            link: string;
            mp4: string;
            gifv: string;
            mp4_size: number;
            looping: boolean;
            comment_count?: any;
            favorite_count?: any;
            ups?: any;
            downs?: any;
            points?: any;
            score?: any;
            processing: IProcessing;
        }
    
        export interface IProcessing2 {
            status: string;
        }
    
        export interface IDatum {
            id: string;
            title: string;
            description: string;
            datetime: number;
            cover: string;
            cover_width: number;
            cover_height: number;
            account_url: string;
            account_id: number;
            privacy: string;
            layout: string;
            views: number;
            link: string;
            ups: number;
            downs: number;
            points: number;
            score: number;
            is_album: boolean;
            vote?: any;
            favorite: boolean;
            nsfw: boolean;
            section: string;
            comment_count: number;
            favorite_count: number;
            topic: string;
            topic_id: number;
            images_count: number;
            in_gallery: boolean;
            is_ad: boolean;
            tags: ITag[];
            ad_type: number;
            ad_url: string;
            in_most_viral: boolean;
            images: Iimage[];
            type: string;
            animated?: boolean;
            width?: number;
            height?: number;
            size?: number;
            bandwidth?: number;
            has_sound?: boolean;
            mp4: string;
            gifv: string;
            mp4_size?: number;
            looping?: boolean;
            processing: IProcessing2;
        }
    
        export interface IGallery {
            data: IDatum[];
            success: boolean;
            status: number;
        }
    
    }  