import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,        // 👈 important if your project is standalone
  imports: [CommonModule]  ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId = '';
  password = '';
  otp = '';
  vendors: any[] = [];

  constructor(private router: Router,private vendorService: VendorService) {}

  ngOnInit() {
    // Call Spring Boot API when Login page loads
    this.vendorService.getAllVendors().subscribe({
  next: (data: any) => {  // 👈 added type
    this.vendors = data;
  },
  error: (err: any) => {  // 👈 added type
    console.error(err);
  }
});

  }

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
