import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-applient',
  templateUrl: './applient.component.html',
  styleUrls: ['./applient.component.css'],
})
export class ApplientComponent implements OnInit {
  isEdit: boolean = false;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  ngOnInit(): void {
   
  }


  edit(){
   this.isEdit = true;
  }
}
