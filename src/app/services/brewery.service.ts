import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

var APIkey = "937f4b8597f174f1b65450a663e1b7cd";
var baseURL = "http://api.brewerydb.com/v2/";
@Injectable()
    export class BreweryService{
        constructor(private _http: HttpClient){}
        
    }
