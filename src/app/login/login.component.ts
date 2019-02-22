import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, public router: Router) {
    this.login = this.formBuilder.group({
        email: [null , Validators.required],
        password: [null , Validators.required]
    });
  }

  ngOnInit() {
  }

  loginForm($password, $email){
    
  }
}
