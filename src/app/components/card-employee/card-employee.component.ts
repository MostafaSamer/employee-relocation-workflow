import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../interfaces/employee';
import { CtaButtonComponent } from "../cta-button/cta-button.component";

@Component({
    selector: 'app-card-employee',
    standalone: true,
    templateUrl: './card-employee.component.html',
    styleUrl: './card-employee.component.scss',
    imports: [CommonModule, CtaButtonComponent]
})
export class CardEmployeeComponent {
  @Input() employee: Employee | undefined;

  relocateEmployee(employee: Employee | undefined) {
    console.log(employee)
  }

}
