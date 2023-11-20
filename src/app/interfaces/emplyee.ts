import { Department } from "./department";

export interface Employee {
    id: number;
    name: string;
    skills: string[];
    performance: number;
    department: Department;
}