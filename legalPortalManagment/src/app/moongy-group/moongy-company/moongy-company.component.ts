import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moongy-company',
  templateUrl: './moongy-company.component.html',
  styleUrls: ['./moongy-company.component.css']
})
export class MoongyCompanyComponent implements OnInit {
   companyName:string = 'Adentis';
  constructor() { }

  ngOnInit(): void {
  }

}
