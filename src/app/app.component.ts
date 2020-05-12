import { Component, OnInit } from '@angular/core';
import { UserService } from './../service/users.service';
import { IUsers } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: IUsers[] = [];
  name: string;
  title = 'northwestern-mutual';
  searchTerm: string;

  constructor(private userService:UserService) { }

  search(){
    this.users = this.users.filter(res =>{
    return res.name.toLowerCase().match(this.name.toLowerCase());
    });
  }
   compare(a,b) {
    const nameA = a.name;
    const nameB = b.name;

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  ngOnInit() {
      this.userService.getUsers().subscribe((data) => {
      this.users = data;
      //console.log("Result Before", this.users);
      this.users = this.users.sort(this.compare);
      //console.log("Result After",this.users);
    }, error => {
     //this.errorMessage = error;
  });
 }
}