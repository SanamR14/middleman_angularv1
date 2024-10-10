import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  apiUrl = 'https://middlemanapi-gqckcpesbfcaaqcj.uksouth-01.azurewebsites.net/api/Register';
  register(userData: any) {
   
    const headers = new HttpHeaders({'accept': '*/*', 'Content-Type': 'application/json'});
      this.http.post(this.apiUrl + '/consumer', userData, { headers, responseType: 'text' }).subscribe((data) => {
        alert(data);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        alert("System development on progress. Please try after some time. Thank you for understanding");
        this.router.navigateByUrl('/home');
      }
)
    
      
    
  }
}
