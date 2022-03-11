import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-applient',
  templateUrl: './add-applient.component.html',
  styleUrls: ['./add-applient.component.css']
})
export class AddApplientComponent implements OnInit {
  applientForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.applientForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
        suite: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(10),
          ],
        ],
        city: [
          null,
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30),
          ],
        ],
        zipecode: [
          null,
          [
            Validators.required,
            Validators.minLength(7),
            Validators.maxLength(7),
          ],
        ],
      }),
      company: this.formBuilder.group({
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
        catchphrase: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
        bs: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
      }),
    });
  }

}
