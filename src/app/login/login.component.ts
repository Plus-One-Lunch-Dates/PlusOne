import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private Http: HttpService) { }

  ngOnInit() {
  }

  loginUser(model) {
    console.log(model, 'model');
    this.Http.login(model);
  }

}
