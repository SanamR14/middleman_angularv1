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
      this.http.post('middlemanapi-gqckcpesbfcaaqcj.uksouth-01.azurewebsites.net/api/Register/consumer', userData, { headers, responseType: 'text' }).subscribe((data) => {
        alert(data);
      },
      (error) => {
        alert("System development on progress. Please try after some time. Thank you for understanding");
      }
)
    
      
    
  }
}
