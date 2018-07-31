import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  private sub: any;
  // This is where preferences are added for sending to server
  model: any = {};

  constructor(private Http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Access to the email of signed-in user
    this.sub = this.route.params.subscribe(params => {
      this.email = params['email'];
    });
  }
  // This changes the component on client-side and destroys the session
  logout(){
    console.log('in logout!!')
    this.Http.exit()
  }
  // This is for console logging in the body
  log(){
    console.log(this.model);
  }
  // This handles the clicks on cravings and the email for model object
        // that is passed to the server
  category(event) {
    this.model.email = this.email;
    this.model.cravings = event.target.innerHTML.toString();
  }
  // Same as category but for price option
  price(event) {
    this.model.price = event.target.innerHTML.toString();
  }
  // Same as above but for attire
  attire(event) {
    this.model.attire = event.target.innerHTML.toString();
  }
  // This passes the model to the server via httpService function
  matchMe(){
    this.Http.gotoChat(this.model);
  }
}
