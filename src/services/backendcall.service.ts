import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendcallService {
  public baseUrl =  'localhost:3001/trcapi';
  constructor(private http: HttpClient) { }

  getAllDetails() {
    return this.http.get(this.baseUrl, {
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  saveAllDetails(data) {
    return this.http.post(this.baseUrl, data, {
      params: new HttpParams().append('token', localStorage.getItem('token')),
      responseType: 'arraybuffer'
    });
  }
}
