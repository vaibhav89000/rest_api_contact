import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }

  addContacts(newConatct){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
    return this.http.post('http://localhost:3000/api/contact',
    newConatct,options).toPromise();
  }


  getConatct(){
    return this.http.get('http://localhost:3000/api/contacts');
  }
}
