import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private http:Http) { }

  ngOnInit() {
  }

  login(){
    this.http.post('http://192.168.1.200/corrigeai/back-end/public/autenticar', this.user)
    .toPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

}
