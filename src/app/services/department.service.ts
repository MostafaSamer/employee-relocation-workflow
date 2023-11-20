import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Department } from '../interfaces/department';

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = "http://localhost:3000/departments"

  constructor(
    private http: HttpClient
  ) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartment(id: string): Observable<Department> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Department>(url);
  }
}
