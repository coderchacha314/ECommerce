import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiService } from '../services/webapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
purchaseCartList:any=[];
  constructor(private webapi:WebapiService,private router:Router, ) { }

  ngOnInit(): void {
    this.purchaseCartList= this.webapi.CartItemAdded;
  }
  NavtoProduct(){
    this.router.navigate(['/products']);
  }
  Deletefromcart(deletedItem:any){
    this.webapi.deletefromCart(deletedItem);
  }

}
