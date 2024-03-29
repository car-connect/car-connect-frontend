import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminmanageproduct',
  templateUrl: './adminmanageproduct.component.html',
  styleUrls: ['./adminmanageproduct.component.css']
})
export class AdminmanageproductComponent implements OnInit {
  products:any=''
  ProductItem:any=[]
  search:any=''
  searchItem(val:any){
    this.search=val.target.value
    console.log("Search",this.search);
    
   this.ProductItem= this.products.filter((value:any)=>{
      return (
        value.product_name.toLowerCase().includes(this.search.toLowerCase()) ||
        value.product_category.toLowerCase().includes(this.search.toLowerCase())
      );

    })
  }

  constructor(public admin:AdminService,private router:Router) { }

  
  delete(product:any){
    this.admin.deleteProduct(product._id).subscribe((data)=>{
      console.log("deleteProduct",data);
      this.router.navigate(["adminhome/manageproduct"])
      
    })
    this.ProductItem=this.products.filter((result:any)=>result !=product)

  }
  addproduct(){
    localStorage.setItem('operation','add')
   }

  
  update(product:any){
    localStorage.setItem('operation','edit')
    this.router.navigate([`/adminhome/addproduct/${product._id}`])
    
  }
  
    


  ngOnInit(): void {
    this.admin.GetProducts() .subscribe((res:any)=>{
      this.products=res
      this.ProductItem=this.products
    })
    
    
   
  }

}
