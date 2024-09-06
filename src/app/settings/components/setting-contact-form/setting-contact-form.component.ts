import {Component, inject, OnInit} from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../../shared/components/snack-bar/snack-bar.component";

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
export class SettingContactFormComponent implements OnInit{
  form: FormGroup;
  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 5;

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
    localStorage.setItem('userData', JSON.stringify(this.form.value));
    this.openSnackBar('Data saved successfully!')
  }

  openSnackBar(msg: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        message: msg,
      }
    });
  }

  ngOnInit() {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.form.setValue(JSON.parse(savedData));
    }
  }
}
