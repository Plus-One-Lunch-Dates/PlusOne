import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {}

  constructor(private Http: HttpService) { }

  ngOnInit() {
  }

  log(){
    console.log(this.model);
  }

  signupUser(model) {
    this.Http.home(model);
  }

  category(event) {
    // console.log(event.target.innerHTML.toString());
    this.model.email = 's.ayalew@yahoo.com'
    this.model.cravings = event.target.innerHTML.toString();
  }
  price(event) {
    // console.log(event.target.innerHTML.toString());
    this.model.price = event.target.innerHTML.toString();
  }
  attire(event) {
    // console.log(event.target.innerHTML.toString());
    this.model.attire = event.target.innerHTML.toString();
  }

  matchMe(model){
    this.Http.gotoChat(model)
  }

}
