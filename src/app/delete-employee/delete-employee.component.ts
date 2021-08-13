import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {


  constructor(private router: Router,private employeeService: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  
  
}
