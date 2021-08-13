import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path : 'promise/karaywanidex', component : EmployeeListComponent},
  {path : 'promise/karaywanidex/create', component : CreateEmployeeComponent},
  {path : '', redirectTo : 'promise/karaywanidex', pathMatch : 'full'},
  {path : 'promise/karaywanidex/update/:id', component : UpdateEmployeeComponent},
  {path : 'promise/karaywanidex/delete/:id', component : DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
