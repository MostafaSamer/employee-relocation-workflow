import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from "../cta-button/cta-button.component";
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { CardEmployeeComponent } from "../card-employee/card-employee.component";
import { FilterEmployeeComponent } from '../filter-employee/filter-employee.component';
import { filter } from 'rxjs';

@Component({
    selector: 'app-list-employees',
    standalone: true,
    templateUrl: './list-employees.component.html',
    styleUrl: './list-employees.component.scss',
    imports: [CommonModule, CtaButtonComponent, CardEmployeeComponent, FilterEmployeeComponent]
})
export class ListEmployeesComponent {
    employees: Employee[] = [];
    filterd_employees: Employee[] = [];

    constructor(
        private employeeService: EmployeeService,
    ) {}

    ngOnInit(): void {
      this.employeeService.getEmployees().subscribe((employees) => {
        this.employees = employees;
        this.filterd_employees = employees;
      })
    }

    handleFilterEvent(filterOptions: any) {
      this.filterdEmployees(filterOptions.performance_from, filterOptions.performance_to, filterOptions.skills)
    }

    filterdEmployees(from: number, to: number, skill: string) {
      this.filterd_employees = this.employees.filter(e => e.performance > from  && e.performance < to)
      if (skill != "")
        this.filterd_employees = this.filterd_employees.filter(e => e.skills.some(s => s.toLowerCase().includes(skill.toLowerCase())))
    }
}
