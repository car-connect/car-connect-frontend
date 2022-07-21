import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public http:HttpClient, public userService:UserService) { }

  User:any={
    username:'',
    password:''
  }
  addUser(){
    this.userService.UserADD(this.User)
  }
  validation(){
    
    
  }

  ngOnInit(): void {
  }

}
