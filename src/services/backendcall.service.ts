import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})

export class BackendcallService {
  public baseUrl =  'http://localhost:4000/api';
 
  constructor(private http: HttpClient) {
  
   }

  login(user: Object) {
     return this.http.post(`${this.baseUrl}/login`, { user });
}

  getAllDetails() {
    return this.http.get(this.baseUrl, {
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  getInfo(type){
    return this.http.get(`${this.baseUrl}/${type}`,httpOptions);
  }

  saveInfo(event: Object, type: String){
    return this.http.post(`${this.baseUrl}/${type}`,{event},httpOptions);
  }

}
