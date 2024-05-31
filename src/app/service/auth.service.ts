import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../environnements/environnement';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    agentInfo = {
        isMobile: false,
        isBot: false,
        deviceFingerprint: "",
        browser: "rpi",
        os: "rpiOS",
        version: "",
        platform: '',
        source: ""
      };

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', "agent": JSON.stringify(this.agentInfo) 
        })
      };
      constructor(private http: HttpClient) {
       
       }
  
    getQrAccess(): Observable<any>{
        return this.http.get(`${API_URL}/bo/v1/qr/request/172.168.1.0`, this.httpOptions)
      }
      
    getAcess(body: any): Observable<any>{
        return this.http.post(`${API_URL}/bo/v1/qr/getaccess`, body, this.httpOptions)
      }
  
}