import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private http:HttpClient) { }

  ProductsUrl='https://fakestoreapi.com/products';
  CartItemAdded:any=[];

  getProduct(){
    return this.http.get(this.ProductsUrl);
  }

  addtocartService(itemname:any){
    this.CartItemAdded.push(itemname);
    console.log(this.CartItemAdded);

  }

  deletefromCart(deleteProduct:any){
    this.CartItemAdded.pop(deleteProduct);
    console.log(this.CartItemAdded);
  }

}
