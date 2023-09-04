import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Contact} from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {


   private apiURL = "http://localhost/contactapi/src/api/contact";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }




  /**
   * getAll(); To list all active contacts in the list.
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/list.php')

    .pipe(
      catchError(this.errorHandler)
    )
  }



  /**
   * Single(): Returns contact based on contact ID
   *
   * @return response()
   */
  single(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/single.php?id=' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }


  /**
   * Create(): Add a new contact to the list
   *
   * @return response()
   */
  create(contact:Contact): Observable<any> {

    return this.httpClient.post(this.apiURL + '/newcontact.php', JSON.stringify(contact), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Update(): Update active contact on the list.
   *
   * @return response()
   */
  update(id:number, contact:Contact): Observable<any> {

    return this.httpClient.post(this.apiURL + '/editcontact.php?id=' + id, JSON.stringify(contact), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }


/**
   * Softdel() : For soft deletion of contact
   *
   * @return response()
   */
softdel(id:number){
  return this.httpClient.put(this.apiURL + '/delete.php?id=' + id, this.httpOptions)

  .pipe(
    catchError(this.errorHandler)
  )
}

/**
   *Undodel() : To Undo deletion of contact list
   *
   * @return response()
   */
undodel(id:number){
  return this.httpClient.put(this.apiURL + '/restore.php?id=' + id, this.httpOptions)

  .pipe(
    catchError(this.errorHandler)
  )
}


/**
   *bylocate() : List Total Contact by Location.
   *
   * @return response()
   */
   bylocate(postcode:string){
    return this.httpClient.get(this.apiURL + '/location.php?postcode=' + postcode, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }


   /**
   * checkBin(); To list all contact in the recycle bin
   *
   * @return response()
   */
   checkBin(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/checkbin.php')

    .pipe(
      catchError(this.errorHandler)
    )
  }




   /**
   * Error Handler Function
   *
   * @return response()
   */
   errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }





}
