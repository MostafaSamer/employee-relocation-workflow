// Import necessary modules and components
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-employee.component.html',
  styleUrls: ['./filter-employee.component.scss']
})
export class FilterEmployeeComponent {
  @Output() filterEmployee: EventEmitter<any> = new EventEmitter();

  filterOptions = {
    performance_from: 0,
    performance_to: 100,
    skills: ""
  }

  // Method to handle changes in filter options and emit the event
  change_filter() {
    this.filterEmployee.emit(this.filterOptions);
  }
}
