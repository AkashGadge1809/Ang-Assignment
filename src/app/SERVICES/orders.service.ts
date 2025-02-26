import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http : HttpClient) { }

  private URL= "http://localhost:3000/orders"

  getOrders():Observable<any>
  {
    return this.http.get(this.URL);
  }


  saveOrder(order: any) :Observable<any>
   {
    return this.http.post(this.URL,order);
   }  

   
}
