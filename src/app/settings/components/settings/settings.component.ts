import { Component } from '@angular/core';
import {SelectComponent} from "../../../shared/components/select/select.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    SelectComponent
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

  onLanguageSelected($event: string) {
    console.log($event)
  }
}
