import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/*
*   These services will likely need to be reconfigured
*   to route via an internal-API endpoint to properly
*   interact with the server and not confuse Angular.
*   It is interacting with the server as-is and is getting
*   the proper data back from the database. But it could
*   end up causing issues as the app grows in complexity.
*/
export class HttpService {

  constructor(private http: HttpClient) { }
  // Server post for new user signup
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
  // Server post for user login
  login({email, password}) {
    return this.http.post('/login', {
        email,
        password
    }).subscribe(data => {
      console.log(data, ' is what we got from the server');
    })
  }
  // Server post with user input for Matching
  gotoChat(model) {
    return this.http.post('/home/email', model).subscribe(data => {
      console.log(data, 'match from server');
      console.log(model, 'user model');
      model.match = data;
      console.log(model.match, 'match prop on model');
      return model;
    })
  }
  // Logout
  exit(){
    return this.http.get('/logout').subscribe((data) => console.log(data));
  }

}
