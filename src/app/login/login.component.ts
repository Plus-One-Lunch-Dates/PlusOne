import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private Http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(model) {
    // console.log(model, 'model');
    this.Http.login(model);
    this.router.navigate(['home', model.email]);
  }

}
