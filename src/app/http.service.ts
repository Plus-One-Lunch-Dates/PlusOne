import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signup({firstName, lastName, username, email, password}) {
    return this.http.post('/signup', {
      firstName,
      lastName,
      username,
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

  home({attire, cravings, price}) {
    return this.http.post('/home/:email', {
      attire,
      cravings,
      price    
    }).subscribe(data => {
      console.log(data, ' is what we got from the server');
    })
  }

  gotoChat({ email, cravings, price, attire }) {
    return this.http.post('/home/:email', {
      email,
      cravings,
      price,
      attire,
    }).subscribe(data => {
      console.log(data, ' is what we got from the server')
    })
  }

  exit(){
    return this.http.get('/logout').subscribe((data) => console.log(data));
  }

}
