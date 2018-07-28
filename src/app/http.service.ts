import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signup({firstname, lastname, email, password}) {
    return this.http.post('/signup', {
      firstname,
      lastname,
      email,
      password
    }).subscribe(data => {
      console.log(data, ' is what we got from the server');
    })
  }

}
