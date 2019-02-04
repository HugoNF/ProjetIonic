import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupError: string;
  form: FormGroup;
  constructor(fb: FormBuilder,
              private navCtrl: NavController, private auth: AuthService) { this.form = fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });

  }
  signup() {
    const data = this.form.value;
    const credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
        () => this.navCtrl.navigateRoot('/home'),
        error => this.signupError = error.message
    );
  }

  ngOnInit() {
  }

}
