import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient,public users:UserService,public admin:AdminService) { }
  username:any=''
  products:any=[
    {
      product_category:"Interior Accessories"
    },
    {
      product_category:"Exterior Accessories"
    },
    {
      product_category:"Car Care"
    },
    {
      product_category:"Audio System"
    },
    {
      product_category:"Driving Comfort"
    },
    {
      product_category:"Wheel Accessories"
    },

  ]
  user(){
    
    this.users.home()

  }
  UserInfo(){
    this.username= localStorage.getItem('user')
  }
  

  ngOnInit(): void {
    this.user()
    this.UserInfo()
    this.admin.GetProducts().subscribe((res:any)=>{
      // this.products=res
    })

  }

}
