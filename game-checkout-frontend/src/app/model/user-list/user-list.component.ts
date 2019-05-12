import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
 
//Component to display list of users
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users: User[];
 
  constructor(private userService: UserService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}