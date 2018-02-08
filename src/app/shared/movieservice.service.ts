import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class MovieserviceService {
  private query:string;
  private title:string= '?t=';
  private API_KEY:string = environment.OMDB_API_KEY;
  private API_URL:string = environment.OMDB_API_URL;
  private URL:string = this.API_URL;
  constructor(private _http:HttpClient) { }

  findShow(query:string){
    return this._http.get(this.URL+query+this.API_KEY);
}
}
