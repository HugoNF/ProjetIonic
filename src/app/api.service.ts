import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private  httpClient: HttpClient) {
    }

    getUsers() {
        return this.httpClient.get(`${environment.api_url}/users`);
    }

    getHearts() {
        return this.httpClient.get(`${environment.api_url}/hearts`);
    }

    createUsers(user) {
        return this.httpClient.post(`${environment.api_url}/users`, user);
    }


}
