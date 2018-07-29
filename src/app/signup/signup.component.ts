import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model:any = {}

  constructor(private Http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  signupUser(model) {
    this.Http.signup(model);
    this.router.navigate(['home', model.email]);
  }

}
