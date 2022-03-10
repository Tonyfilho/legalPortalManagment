import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApplientsModule } from './applients/applients.module';
import { MoongyGroupModule } from './moongy-group/moongy-group.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    MoongyGroupModule,
    ApplientsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
