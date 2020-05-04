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
  results:any;
  constructor(private userService:UserService) { }

  search(){
    this.users = this.users.filter(res =>{
    return res.name.toLowerCase().match(this.name.toLowerCase());
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
   /* this.userService.getUsers().subscribe((data) => {
      this.results = data;
      console.log("Result", data);
  }, error => {
     //this.errorMessage = error;
  });*/
 }
}