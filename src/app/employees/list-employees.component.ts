import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Shakira',
      gender: 'Female',
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/shakira.jpg',
    },
    {
      id: 2,
      name: 'Gisele',
      gender: 'Female',
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1979'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/giseles.jpg',
    },
    {
      id: 3,
      name: 'Sansa',
      gender: 'Female',
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1996'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/sansa.jpg',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
