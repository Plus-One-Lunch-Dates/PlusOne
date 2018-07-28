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

  signupUser(event) {
    event.preventDefault()
    const target = event.target
    const firstname = target.querySelector('#firstname').value
    const lastname = target.querySelector('#lastname').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    console.log(firstname, lastname, email, password)
    this.Http.signup(this.model);
    // console.log(this.model);
  }

  onSubmit() {
    
  }
}
