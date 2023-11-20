import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../interfaces/employee';
import { CtaButtonComponent } from "../cta-button/cta-button.component";
import { RelocateModalComponent } from '../relocate-modal/relocate-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../interfaces/department';

@Component({
    selector: 'app-card-employee',
    standalone: true,
    templateUrl: './card-employee.component.html',
    styleUrl: './card-employee.component.scss',
    imports: [CommonModule, CtaButtonComponent]
})
export class CardEmployeeComponent {
  @Input() employee: Employee | undefined;
  isModalOpen: boolean = false;

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {}

  relocateEmployee(employee: Employee | undefined) {
    if (!this.isModalOpen) {
      this.isModalOpen = true;

      const dialogRef = this.dialog.open(RelocateModalComponent, {
        data: employee,
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        this.isModalOpen = false;
        
        if (result && employee) {
          let newEmp: Employee = employee;
          this.departmentService.getDepartment(result.departmentId)
          .subscribe((department: Department) => {
            newEmp.department = department;
            this.employeeService.editEmployee(employee.id.toString(), newEmp).subscribe();
          })
        }
      });
    }
  }

}
