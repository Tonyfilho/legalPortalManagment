import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import { ApplientsComponent } from '../app/applients/applients/applients.component';
import { ApplientComponent } from '../app/applients/applient/applient.component';
import { AddApplientComponent } from '../app/applients/add-applient/add-applient.component';


import { MoongyGroupModule } from './moongy-group/moongy-group.module';

@NgModule({
  declarations: [
    AppComponent,
    ApplientsComponent,
    ApplientComponent,
    AddApplientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    MoongyGroupModule,    
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
