import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../interfaces/employee';
import { CtaButtonComponent } from "../cta-button/cta-button.component";
import { RelocateModalComponent } from '../relocate-modal/relocate-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-card-employee',
    standalone: true,
    templateUrl: './card-employee.component.html',
    styleUrl: './card-employee.component.scss',
    imports: [CommonModule, CtaButtonComponent]
})
export class CardEmployeeComponent {
  @Input() employee: Employee | undefined;

  constructor(
    private dialog: MatDialog,
  ) {}

  relocateEmployee(employee: Employee | undefined) {
    const dialogRef = this.dialog.open(RelocateModalComponent, {
      data: employee,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(employee)
      }
    });
  }

}
