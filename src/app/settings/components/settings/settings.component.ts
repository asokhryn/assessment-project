import {Component, inject} from '@angular/core';
import {SelectComponent} from "../../../shared/components/select/select.component";
import {SettingContactFormComponent} from "../setting-contact-form/setting-contact-form.component";
import {SnackBarComponent} from "../../../shared/components/snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    SelectComponent,
    SettingContactFormComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  languageList = [
    { value: 'English', viewValue: 'English' },
    { value: 'Spanish', viewValue: 'Spanish' },
    { value: 'Chinese', viewValue: 'Chinese' },
    { value: 'Hindi', viewValue: 'Hindi' },
    { value: 'Arabic', viewValue: 'Arabic' },
    { value: 'French', viewValue: 'French' },
    { value: 'Ukraine', viewValue: 'Ukraine' },
    { value: 'German', viewValue: 'German' },
    { value: 'Portuguese', viewValue: 'Portuguese' },
    { value: 'Japanese', viewValue: 'Japanese' }
  ];

  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 5;

  openSnackBar(msg: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        message: msg,
      }
    });
  }

  onLanguageSelected($event: string) {
    this.openSnackBar(`Your language "${$event}" is selected.`);
  }
}
