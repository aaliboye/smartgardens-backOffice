import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginQrcodeComponent } from './login-qrcode/login-qrcode.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginQrcodeComponent],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smartgarden-backOffice';
}
