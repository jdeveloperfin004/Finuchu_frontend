import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId = '';
  password = '';
  otp = '';

  constructor(private router: Router) {}

  onValidate() { 
   this.router.navigate(['/lists']);
    
    alert('Validate clicked'); 
  }
  onLogin() {
    this.router.navigate(['/home']);
    // if (this.userId && this.password && this.otp) {
    // } else {
    //   alert('Please enter all fields');
    // }
  }
}
