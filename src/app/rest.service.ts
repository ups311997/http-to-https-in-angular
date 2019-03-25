import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  getAllUsers() {
    return this.http.get('https://localhost:8082/rest/user/All')
  }
  postuser(id, name) {
    return this.http.get(`https://localhost:8082/rest/user/add/${id}/${name}`)
  }
}
