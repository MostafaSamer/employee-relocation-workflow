import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Department } from '../../interfaces/department';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-relocate-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule],
  templateUrl: './relocate-modal.component.html',
  styleUrl: './relocate-modal.component.scss'
})
export class RelocateModalComponent {
  departments: Department[] = [];
  selectedDepartment: Department | null = null;

  constructor(
    public dialogRef: MatDialogRef<RelocateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    private departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {
  //   this.loadingService.showLoading();
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
      // this.loadingService.hideLoading();
    })
  }

}
