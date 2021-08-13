import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];
  employee: Employee =new Employee();
  popoverTitle = 'Konfirmasi';
  popoverMessage = 'Aoakah anda akan menghapus data ini';
  confirmClicked = false;
  cancelClicked = false;
  constructor(private EmployeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.EmployeeService.getEmployeesList().subscribe(data => {
      this.employees =data;
    })
  }

   updateEmployee(id : number){
    this.router.navigate(["/promise/karaywanidex/update/", id]);
  }
  

  deleteEmployee(id : number){
    this.router.navigate(["/promise/karaywanidex/delete/", id]);
  }
  confirm(confirmClicked: boolean, id : number){
    this.confirmClicked = confirmClicked;
    if(this.confirmClicked){
      this.EmployeeService.getEmployeeId(id).subscribe(data =>{
        this.employee= data;
        this.EmployeeService.deleteEmployeeId(id).subscribe(  data =>{
          this.getEmployees();
        })        
      }, error => console.log(error));

      
    }
  }

}
