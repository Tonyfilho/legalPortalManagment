import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplientsComponent } from './applients/applients.component';
import { ApplientComponent } from './applient/applient.component';
import { AddApplientComponent } from './add-applient/add-applient.component';



@NgModule({
  declarations: [
    ApplientsComponent,
    ApplientComponent,
    AddApplientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ApplientsModule { }
