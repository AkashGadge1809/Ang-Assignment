import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http : HttpClient) { }

  private URL= "http://localhost:3000/cart"
  saveProduct(prod:any):Observable<any>
  {
    return this.http.post(this.URL,prod);
  }

  getproduct():Observable<any>{
    return this.http.get(this.URL)
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete(`${this.URL}/${id}`)
  }

}
