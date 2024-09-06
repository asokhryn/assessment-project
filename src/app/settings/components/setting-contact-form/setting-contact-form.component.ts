import { Component } from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-setting-contact-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatHint,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './setting-contact-form.component.html',
  styleUrl: './setting-contact-form.component.css'
})
export class SettingContactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      postalCode: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
