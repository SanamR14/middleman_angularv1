import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userData: any) {
    const headers = new HttpHeaders({'accept': '*/*', 'Content-Type': 'application/json'});
    this.http.post('https://localhost:7247/api/Register/Consumer', userData, { headers, responseType: 'text' }).subscribe((data) => {
      alert(data);
    })
  }
}
