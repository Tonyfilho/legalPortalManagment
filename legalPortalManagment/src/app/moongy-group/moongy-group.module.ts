import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './moongy-user/user.component';
import { MoongyCompanyComponent } from './moongy-company/moongy-company.component';
import { MoongyGroupComponent } from './moongy-group/moongy-group.component';



@NgModule({
  declarations: [
    UserComponent,
    MoongyCompanyComponent,
    MoongyGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoongyGroupModule { }
