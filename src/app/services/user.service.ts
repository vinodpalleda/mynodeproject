import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { 

  }
  getData(endpoint){
    let url = `https://62a83570943591102b9c35c8.mockapi.io/${endpoint}`;
    
    return this.http.get(url)
  }
}
