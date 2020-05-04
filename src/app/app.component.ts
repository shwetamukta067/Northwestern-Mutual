import { Component, OnInit } from '@angular/core';
import { UserService } from './../service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users:any =[];
  title = 'northwestern-mutual';
  constructor(private userService:UserService) {}
  ngOnInit() {
     this.userService.getUsers().subscribe(data => this.users = data);
  }
  
}
