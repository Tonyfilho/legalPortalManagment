import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './moongy-user/user.component';
import { MoongyCompanyComponent } from './moongy-company/moongy-company.component';



@NgModule({
  declarations: [
    UserComponent,
    MoongyCompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoongyGroupModule { }
