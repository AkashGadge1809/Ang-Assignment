import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../SERVICES/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../SERVICES/cart.service';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private prod : ProductService, private router : Router, private cart : CartService){

  }

  products: any[]=[]
  showAlert: boolean = false;

  ngOnInit(){
    this.fetchProduct();
  }

  fetchProduct()
  {
    this.prod.getProduct().subscribe((res)=>{
      this.products=res;
    })
  }

  buyProduct(prod : any)
  {
    
    this.router.navigate(['/buy'],{queryParams:prod})
    console.log('product',prod)
  }

  AddtoCart(prod:any)
  {
    this.cart.saveProduct(prod).subscribe((res)=>{
     
      this.showAlert = true; // Show alert

      setTimeout(() => {
        this.showAlert = false; // Hide alert after 2 seconds
      }, 2000);
    })
    
  }

}
