import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moongy-company',
  templateUrl: './moongy-company.component.html',
  styleUrls: ['./moongy-company.component.css']
})
export class MoongyCompanyComponent implements OnInit, AfterViewInit {
   companyName!:string ;
   companyUser!:string;
   serverImage!:string; //esta imagem virá de forma dinamica da DB;
  constructor() {
    this.serverImage = '../../../assets/images/moongyAdentis.png';
   
   }
  ngAfterViewInit(): void {
    this.companyName ='Adentis';
    this.companyUser  ='Andre';
  }

  ngOnInit(): void {
  }

}
