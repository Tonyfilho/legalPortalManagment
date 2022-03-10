import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';

import { UserComponent } from './moongy-user/user.component';
import { MoongyCompanyComponent } from './moongy-company/moongy-company.component';
import { MoongyGroupComponent } from './moongy-group/moongy-group.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UserComponent,
    MoongyCompanyComponent,
    MoongyGroupComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule
  ],
  exports:[
    MoongyGroupComponent,
    MoongyCompanyComponent
  ]
})
export class MoongyGroupModule { }
