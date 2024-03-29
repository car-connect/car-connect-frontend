import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminmanageuser',
  templateUrl: './adminmanageuser.component.html',
  styleUrls: ['./adminmanageuser.component.css']
})
export class AdminmanageuserComponent implements OnInit {
  users:any=''
  UserItem:any=''
  search:any=''
  searchItem(val:any){
    this.search=val.target.value
    console.log(this.search);
    
    
   this.UserItem= this.users.filter((value:any)=>{
      return (
        value.product_name.toLowerCase().includes(this.search.toLowerCase()) ||
        value.product_category.toLowerCase().includes(this.search.toLowerCase())
      );

    })
  }
  constructor(public admin:AdminService,private router:Router) { }
  delete(id:any){
    this.admin.deleteUser(id).subscribe((data)=>{
      console.log("deleteUser",data);
      
      this.router.navigate(["adminhome"])
      
      
    })
  }
  
  ngOnInit(): void {
    this.admin.GetUsers().subscribe((res:any)=>{
      
      this.users=res
      this.UserItem=this.users
      console.log(this.UserItem);
      
    })
  }

}
