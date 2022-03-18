import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApplientsService } from '../applients.service';

@Component({
  selector: 'app-applient',
  templateUrl: './applient.component.html',
  styleUrls: ['./applient.component.css'],
})
export class ApplientComponent implements OnInit {
  isEdit: boolean = false;
  options: FormGroup;
  countriesName:string[] = [];
  selectedCountryName: string = '';
  applient: any = new FormControl();
  floatLabelControl = new FormControl('auto');

  constructor(private fb: FormBuilder, private applientService: ApplientsService) {
    this.options = fb.group({ });
   //serviço de paises 
   this.applientService.getAllCountriesName().subscribe((data: any )=> {
   Array.from(data).map((mapdata: any) =>  {this.countriesName.push(mapdata.name) })
  
  });

  }
  ngOnInit(): void {
   
  }


  edit(){
   this.isEdit = true;
  }
}
