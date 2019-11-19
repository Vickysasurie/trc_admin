import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
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
      params: new HttpParams().append('token', sessionStorage.getItem('token'))
    });
  }

  getInfo(type){
    return this.http.get(`${this.baseUrl}/${type}`,httpOptions);
  }

  saveEventInfo(event: Object, type: String){
    return this.http.post(`${this.baseUrl}/${type}`,{event},httpOptions);
  }

  saveVideoInfo(videos: Object, type: String){
    return this.http.post(`${this.baseUrl}/${type}`,{videos},httpOptions);
  }

  saveQuoteInfo(quote: Object, type: String){
    return this.http.post(`${this.baseUrl}/${type}`,{quote},httpOptions);
  }

  saveImagesInfo(images: Object, type: String){
    return this.http.post(`${this.baseUrl}/${type}`,{images},httpOptions);
  }

}
