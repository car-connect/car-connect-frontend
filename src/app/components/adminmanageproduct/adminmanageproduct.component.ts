import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminmanageproduct',
  templateUrl: './adminmanageproduct.component.html',
  styleUrls: ['./adminmanageproduct.component.css']
})
export class AdminmanageproductComponent implements OnInit {
  products:any=''
  ProductItem:any=''
  search:any=''
  searchItem(val:any){
    this.search=val.target.value
    console.log(this.search);
    
    
   this.ProductItem= this.products.filter((value:any)=>{
      return (
        value.product_name.toLowerCase().includes(this.search.toLowerCase()) ||
        value.product_category.toLowerCase().includes(this.search.toLowerCase())
      );

    })
  }

  constructor(public admin:AdminService) { }
  delete(id:any){
    this.admin.deleteProduct(id)
  }
  
    


  ngOnInit(): void {
    this.admin.GetProducts() .subscribe((res:any)=>{
      this.products=res
      this.ProductItem=this.products
    })
    
    
   
  }

}
