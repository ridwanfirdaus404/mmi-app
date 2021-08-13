import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { PositionService } from '../position.service';
import { Positions } from '../positions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  
  employee: Employee = new Employee();
  position: Positions[];
  id: number
  empSelected: any;
  constructor(private route: ActivatedRoute,private PositionService: PositionService, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getList();
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeId(this.id).subscribe(data =>{
      this.employee = data;
      if(this.employee.gender == 1){
        this.employee.gen ='Pria'
      }else{
        this.employee.gen='Wanita'
      }
      this.empSelected = this.employee;
      console.log(this.empSelected)
     
    }, error => console.log(error));

   

    
  }

  

  saveEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe(data =>{
      
    },
    error => console.log(error))
  }

  goToEmployeList(){
    this.router.navigate(["/promise/karaywanidex"])
  }
  onSubmit(){
    this.saveEmployee();
    this.goToEmployeList()
    
  }
  onKlik(){
    this.goToEmployeList();
  }
  
  
  private getList(){
    this.PositionService.getPositionList().subscribe(data => {
      this.position =data;
    })
  }
}
