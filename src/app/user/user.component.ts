import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  users: User[];
  // https://stackoverflow.com/questions/47560868/angular-error-ts2322-type-itemsresponse-is-not-assignable-to-type-string
  // https://stackoverflow.com/questions/35204803/angular2-and-typescript-error-ts2322-type-response-is-not-assignable-to-type
  // https://stackoverflow.com/questions/41819805/type-observableany-is-not-assignable-to-type
  // https://stackoverflow.com/questions/40807744/error-ts2322-type-object-is-not-assignable-to-type-object

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    console.log("texto cualquiera!!!");
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
        console.log("result " + data[0].id + " " + data[0].firstName + " " + data[0].lastName + " " + data[0].email);
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}