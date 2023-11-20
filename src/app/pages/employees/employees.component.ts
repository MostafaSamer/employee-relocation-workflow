import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from "../../components/list-employees/list-employees.component";

@Component({
    selector: 'app-employees',
    standalone: true,
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.scss',
    imports: [CommonModule, ListEmployeesComponent]
})
export class EmployeesComponent {

}
