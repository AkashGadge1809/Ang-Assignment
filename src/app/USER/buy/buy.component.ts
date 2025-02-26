import { Component } from '@angular/core';
import { OrdersService } from '../../SERVICES/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  constructor(private order : OrdersService, private route : ActivatedRoute, private router: Router) { }

  products: any ={};
  showAlert: boolean = false;
  
  ngOnInit(){
    this.getproducts();
  }
  getproducts(){
  this.route.queryParamMap.subscribe((prod)=>{
    this.products={
      name:prod.get('name'),
      price:prod.get('price'),
      img:prod.get('image'),
      desc:prod.get('desc'),
      id:prod.get('id')
    };
  })}

  saveOrder(){
    this.order.saveOrder(this.products).subscribe((res)=>{
      this.showAlert = true; // Show alert
  
        setTimeout(() => {
          this.router.navigate(['/product']);
          this.showAlert = false; // Hide alert after 2 seconds
        }, 2000);
      })

      

    }

    cancel(){
      this.products = {};
      this.router.navigate(['/cart']);
    }
  
}
