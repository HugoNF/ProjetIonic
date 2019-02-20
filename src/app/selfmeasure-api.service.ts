import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Users } from './models/users';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:8000/api';



@Injectable({
  providedIn: 'root'
})
export class SelfmeasureApiService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUsers (): Observable<Users[]> {
    return this.httpClient.get<Users[]>(baseURL)
        .pipe(
            tap(_ => console.log('fetched users')),
            catchError(this.handleError('getUsers', []))
        );
  }

  getUser(id: number): Observable<Users> {
    const url = `${baseURL}/${id}`;
    return this.httpClient.get<Users>(url).pipe(
        tap(_ => console.log(`fetched user id=${id}`)),
        catchError(this.handleError<Users>(`getUser id=${id}`))
    );
  }

  addUser (user): Observable<Users> {
    return this.httpClient.post<Users>(baseURL, user, httpOptions).pipe(
        tap((user: Users) => console.log(`added user w/ id=${user.id}`)),
        catchError(this.handleError<Users>('addUser'))
    );
  }

  updateUser (id, product): Observable<any> {
    const url = `${baseURL}/${id}`;
    return this.httpClient.put(url, product, httpOptions).pipe(
        tap(_ => console.log(`updated product id=${id}`)),
        catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser (id): Observable<Users> {
    const url = `${baseURL}/${id}`;

    return this.httpClient.delete<Users>(url, httpOptions).pipe(
        tap(_ => console.log(`deleted product id=${id}`)),
        catchError(this.handleError<Users>('deleteProduct'))
    );
  }

  /*getUsers() {

    return this.httpClient.get(this.baseURL + '/users');

  }


  getUser(id) {
    return this.httpClient.get(this.baseURL + `/users/${id}`);
  }*/

}
