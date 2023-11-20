import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from "../cta-button/cta-button.component";
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { CardEmployeeComponent } from "../card-employee/card-employee.component";

@Component({
    selector: 'app-list-employees',
    standalone: true,
    templateUrl: './list-employees.component.html',
    styleUrl: './list-employees.component.scss',
    imports: [CommonModule, CtaButtonComponent, CardEmployeeComponent]
})
export class ListEmployeesComponent {
    employees: Employee[] = [];

    constructor(
        private employeeService: EmployeeService,
    ) {}

    ngOnInit(): void {
      this.employeeService.getEmployees().subscribe((employees) => {
        this.employees = employees;
      })
    }

}
