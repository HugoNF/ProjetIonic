import {Component, Input, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import {ApiService} from '../api.service';
import {Router} from '@angular/router';



@Component({
    selector: 'app-user-create',
    styleUrls: ['./user-create.component.scss'],
    templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {


    public register: FormGroup;

    constructor(private formBuilder: FormBuilder, private apiService: ApiService, public router: Router) {
        this.register = this.formBuilder.group({
            name: [null, Validators.required],
            firstname: [null, Validators.required],
            age: [null, Validators.required],

            password: [null, Validators.required],
            sexe: [null, Validators.required],
            email: [null, Validators.required],
            yearsmoking: [null, Validators.required],
            consumtabac: [null, Validators.required],
            cigarettepaquet: [null, Validators.required],
            pricepaquet: [null, Validators.required],
            tarlevel: [null, Validators.required],
            nicotinelevel: [null, Validators.required]
        });


    }

    logForm() {

        this.apiService.createUsers(this.register.value).subscribe((response) => {
            console.log(response);
        });
    }

    ngOnInit() {
    }


}
