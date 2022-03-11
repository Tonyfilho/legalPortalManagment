import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-applients',
  templateUrl: './applients.component.html',
  styleUrls: ['./applients.component.css']
})
export class ApplientsComponent implements OnInit {
  applients: any[]= [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
