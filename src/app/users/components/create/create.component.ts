import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {IUser} from "../../types/interfaces";
import {filter, Observable, take} from "rxjs";
import {UserService} from "../../services/user.service";
import {selectAllEntities} from "@ngneat/elf-entities";
import {userStore} from "../../store/user.store";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  form: FormGroup;
  users$: Observable<IUser[]>;

  //mockUser for simulation of user creation
  mockUser: IUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.users$ = userStore.pipe(selectAllEntities());

    this.form = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      street: [''],
      suite: [''],
      city: [''],
      companyName: [''],
      website: ['']
    });
  }

  onSubmit() {
    const formData = this.form.value;

    //simulation of user creation
    const updatedUser: IUser = {
      ...this.mockUser,
      name: formData.name || this.mockUser.name,
      username: formData.username || this.mockUser.username,
      email: formData.email || this.mockUser.email,
      address: {
        ...this.mockUser.address,
        street: formData.street || this.mockUser.address.street,
        suite: formData.suite || this.mockUser.address.suite,
        city: formData.city || this.mockUser.address.city,
      },
      company: {
        ...this.mockUser.company,
        name: formData.companyName || this.mockUser.company.name,
      },
      website: formData.website || this.mockUser.website
    };

    this.userService.createUser(updatedUser).subscribe()
  }

  ngOnInit(): void {
    //if there was no request yet
    this.users$.pipe(
      take(1),
      filter(users => users.length === 0)
    ).subscribe(() => {
      this.userService.getUsers().subscribe();
    });
  }
}
