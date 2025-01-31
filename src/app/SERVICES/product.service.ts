import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  private URL= "http://localhost:3000/product"


  getProduct():Observable<any>
  {
    return this.http.get(this.URL)
  }

}
