import { Department } from "./department";

interface Employee {
    id: number;
    name: string;
    skills: string[];
    performance: number;
    department: Department;
}