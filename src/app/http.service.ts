import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signup({firstName, lastName, email, password}) {
    return this.http.post('/signup', {
      firstName,
      lastName,
      email,
      password
    }).subscribe(data => {
      console.log(data, ' is what we got from the server');
    })
  }
  
  login({email, password}) {
    return this.http.post('/login', {
        email,
        password
    }).subscribe(data => {
      console.log(data, ' is what we got from the server');
    })
  }

}
