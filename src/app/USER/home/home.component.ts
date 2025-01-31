import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../SERVICES/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private prod : ProductService) {
    
  }
  products :any[]=[]
  // products = [
  //   { id: 1, name: 'Product 1', price: 100, image: 'https://img.freepik.com/premium-vector/gardening-design_24911-42148.jpg?w=740' },
  //   { id: 2, name: 'Product 2', price: 200, image: 'https://img.freepik.com/premium-vector/gardening-design_24911-42148.jpg?w=740' },
  //   { id: 3, name: 'Product 3', price: 300, image: 'https://img.freepik.com/premium-vector/gardening-design_24911-42148.jpg?w=740' },
  //   { id: 4, name: 'Product 4', price: 400, image: 'https://img.freepik.com/premium-vector/gardening-design_24911-42148.jpg?w=740' },
  //   { id: 5, name: 'Product 5', price: 500, image: 'https://img.freepik.com/premium-vector/gardening-design_24911-42148.jpg?w=740' },
  //   { id: 6, name: 'Product 6', price: 600, image: 'https://img.freepik.com/premium-vector/gardening-design_24911-42148.jpg?w=740' },
  // ];

  ngOnInit():any{
    this.fetchProduct()
  }

  fetchProduct(){
    this.prod.getProduct().subscribe((res)=>{
      this.products=res
    })
  }

}
