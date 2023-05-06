import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpHeaders = new HttpHeaders().set('content-type','application/json');

  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  addContact(contact: Contact): Observable<any> {
    console.log(contact);
    return this.http.post<any>(this.apiUrl + '/createContact', contact).pipe(catchError(this.handlError));
  }
  updateContact(editContact: Contact,index : number): Observable<any>{
    return this.http.put<any>(this.apiUrl + `/updateContact?id=${index}`, editContact).pipe(catchError(this.handlError));
  }
  removeContact(index:number): Observable<any>{
    return this.http.delete<any>(this.apiUrl + `/deleteContact?id=${index}`).pipe(catchError(this.handlError));
  }
  
  handlError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Èrror Code : ${error.status}\n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
