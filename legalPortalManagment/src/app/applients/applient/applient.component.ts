import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApplientsService } from '../applients.service';

@Component({
  selector: 'app-applient',
  templateUrl: './applient.component.html',
  styleUrls: ['./applient.component.css'],
})
export class ApplientComponent implements OnInit, OnChanges {
  isEdit: boolean = false;
  countriesName: string[] = [];
  selectedCountryName: any = 'Portugal';
  selectedBirthdate: any;
  selectedAdmissionDate: any;
  applientForm!: FormGroup;
  floatLabelControl = new FormControl('auto');

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
      admissionDate: [this.selectedAdmissionDate],
      birthDate:[],
      phone: [],
      country:[this.selectedCountryName]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
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
