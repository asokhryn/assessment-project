import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatLabel
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() label: string = '';
  @Input() options: { value: string, viewValue: string }[] = [];

  @Output() selectedOption = new EventEmitter();

  onLanguageSelect(selectedValue: string) {
    this.selectedOption.emit(selectedValue);
  }
}
