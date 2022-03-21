import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplientsService } from '../applients.service';

@Component({
  selector: 'app-add-applient',
  templateUrl: './add-applient.component.html',
  styleUrls: ['./add-applient.component.css']
})
export class AddApplientComponent implements OnInit {
  isEdit: boolean = false;
  countriesName: string[] = [];
  selectedCountryName: any = 'Portugal';
  selectedBirthdate: any;
  selectedAdmissionDate: any;
  applientForm!: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private applientService: ApplientsService
  ) {
    //serviço que pega todos os  paises
    this.applientService.getAllCountriesName().subscribe((data: any) => {
      Array.from(data).map((mapdata: any) => {
        this.countriesName.push(mapdata.name);
      });
    });
  
  }

  ngOnInit(): void {
    this.applientForm = this.fb.group({
      name: [],
      email: [],
      admissionDate: [],
      birthDate:[],
      phone: [],
      country:[this.selectedCountryName],
      naturalness:[],
      nationality:[]
    });
  }
  ngOnChanges(): void {
      //serviço que busca a nacionalidade 
      this.applientService.getCountrySelected(this.selectedCountryName).subscribe(data  => {})
    //serviço que busca a nacionalidade 
   this.applientService.getCountrySelected(this.selectedCountryName).subscribe(data  => { console.log(data)})
   console.log(this.selectedAdmissionDate,'admission')
      
  }
  
  edit() {
    this.isEdit = true;
  }

}
