import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginError: string;
  constructor(private navCtrl: NavController,
              private auth: AuthService,
              fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  login() {
    const data = this.loginForm.value;

    if (!data.email){
      return;
    }

    const credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
        .then(
            () => this.navCtrl.navigateRoot('/home'),
            error => this.loginError = error.message
        );
  }

  ngOnInit() {
  }

}
