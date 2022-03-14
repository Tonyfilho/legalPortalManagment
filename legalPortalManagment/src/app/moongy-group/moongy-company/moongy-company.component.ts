import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moongy-company',
  templateUrl: './moongy-company.component.html',
  styleUrls: ['./moongy-company.component.css']
})
export class MoongyCompanyComponent implements OnInit{
   companyName:string = 'Adentis';
   companyUser:string = 'Andre';
   serverImage:string = '../../../assets/images/moongyAdentis.png'; //esta imagem virá de forma dinamica da DB;
  constructor() {
    // this.companyName ='Adentis';
    // this.companyUser  =;
    
  }
  // ngAfterViewInit(): void {
  //   this.serverImage = '../../../assets/images/moongyAdentis.png';
  // }

  ngOnInit(): void {
  }

}
