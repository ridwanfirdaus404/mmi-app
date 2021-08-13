import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { PositionService } from '../position.service';
import { Positions } from '../positions';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  position: Positions[];
  popoverTitle = 'Konfirmasi';
  popoverMessage = 'Aoakah anda ingin menyimpan data ini';
  confirmClicked = false;
  cancelClicked = false;
  constructor(private PositionService: PositionService, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  saveEmployee(){
    this.employeeService.createEmploye(this.employee).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error))
  }

  goToEmployeList(){
    this.router.navigate(["/promise/karaywanidex"])
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
  }
  onKlik(){
  }
  
  
  private getList(){
    this.PositionService.getPositionList().subscribe(data => {
      this.position =data;
    })
  }
  confirm(confirmClicked: boolean){
    this.confirmClicked = confirmClicked;
    if(this.confirmClicked){
      this.onSubmit();
      this.goToEmployeList();
    }
  }
}
