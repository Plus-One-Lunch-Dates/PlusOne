import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signup({firstName, lastName, username, number, email, password}) {
    return this.http.post('/signup', {
      firstName,
      lastName,
      username,
      number,
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

  gotoChat(model) {
    return this.http.post('/home/email', model).subscribe(data => {
      console.log(data, 'match from server');
      console.log(model, 'user model');
      model.match = data;
      console.log(model.match, 'match prop on model');
      return model;
    })
  }

  exit(){
    return this.http.get('/logout').subscribe((data) => console.log(data));
  }

}
