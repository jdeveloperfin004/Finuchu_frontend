import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private apiUrl = 'http://localhost:8080/SPRINGBOOTPROJ01-RESTAPI_CRUD_02/rest-api';

  constructor(private http: HttpClient) {}

  getAllVendors(): Observable<any> {   // 👈 must match exactly
    return this.http.get(`${this.apiUrl}/getAllVendorDetails`);
  }
}
