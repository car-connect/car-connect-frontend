import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice:UserService,public router:Router) { 

  }

  User:any={
    username:'',
    password:''
  }
  UserADD(){
    this.userservice.loginADD(this.User)
  }
  google(){
    // this.userservice.GoogleADD()
   // window.location.href='http://localhost:8000/auth/google'
   window.open('http://localhost:8000/auth/google',"mywindow","location=1,status=1,scrollbars=1, width=800,height=800");
   let listener = window.addEventListener('message', (message) => {
    console.log(message);
    if(message.data.user){
      localStorage.setItem("token",message.data.token);
      localStorage.setItem("user",message.data.user.username)
      this.router.navigate([""])
    }

    
     //message will contain facebook user and details
   });

  }

  ngOnInit(): void {
  }

}