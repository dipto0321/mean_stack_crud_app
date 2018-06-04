import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country } from "../country";

@Injectable()
export class CountryService {
    get country(): Country {
        return this._country;
    }

    set country(value: Country) {
        this._country = value;
    }

  private baseUri:string = 'http://localhost:4000';
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  private _country:Country;

  createCountry(country:Country){
    return this.http.post(this.baseUri+'/create',country,{headers:this.headers});
  }
  readCountries(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }
  updateCountry(country:Country){
      return this.http.put(this.baseUri+'/update',country,{headers:this.headers});
  }
  deleteCountry(id:string){
      return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }

}
