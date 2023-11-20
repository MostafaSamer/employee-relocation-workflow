import { Department } from "./department";

export interface RelocationRequest {
    employee_id: number;
    department: Department
}