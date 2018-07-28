import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model:any = {}

  constructor(private Http: HttpService) { }

  ngOnInit() {
  }

  signupUser(model) {
    this.Http.signup(model);
  }

}
