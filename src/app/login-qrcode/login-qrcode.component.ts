import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Subscription, delay, interval } from 'rxjs';
import { Router } from '@angular/router';
import { setInterval } from 'timers';

@Component({
  selector: 'app-login-qrcode',
  standalone: true,
  imports: [],
  templateUrl: './login-qrcode.component.html',
  styleUrls: ['./login-qrcode.component.scss'] // Correction: `styleUrl` doit être `styleUrls`
})
export class LoginQrcodeComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription | null = null;
  constructor(private authService: AuthService, private router: Router) {}

  private intervalId: any;


  qrcode: string | null = null;
  result: any =  {};

  ngOnInit(): void {
    this.authService.getQrAccess().subscribe((data) => {
      console.log(`----------qr access---------${JSON.stringify(data)}`);
      this.qrcode = data['qrcode'];
      this.result = data;
      console.log(`----------result---------${this.result}`);

      
    });
     
    
  }

  
  ngAfterViewInit(): void {
    
  }


  getaccess() {
    setInterval(() => {
      console.log(`----------result---------${this.result}`);
      this.authService.getAcess({
        ip: this.result['ip'],
        nonce: this.result['nonce'],
      }).subscribe(response => {
        console.log('Access response:', response);
      }, error => {
        console.error('Access error:', error);
      });
    }, 1000);
    
        
    
  }

  ngOnDestroy() {
    
    
  }
}
