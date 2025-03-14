import { Component } from '@angular/core';
import { CartService } from '../../SERVICES/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
constructor(private cart : CartService,private router : Router) {

}

products:any[]=[]
showAlert: boolean = false;

ngOnInit(){
  this.fetchProduct();
}

fetchProduct(){
  this.cart.getproduct().subscribe((res)=>{
this.products=res
  })
}

buyProduct(prod:any){
  console.log('Product',prod)
  this.router.navigate(['/buy'],{queryParams:prod})
}

remove(id:string){
  this.cart.deleteProduct(id).subscribe((res)=>{
    this.fetchProduct();
    this.showAlert = true; // Show alert

      setTimeout(() => {
        this.showAlert = false; // Hide alert after 2 seconds
      }, 2000);
    })
  }
}
