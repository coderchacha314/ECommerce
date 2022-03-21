import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../services/webapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList:any;
cardItemList:any=[];
constructor( private webapi:WebapiService) { }

  ngOnInit(): void {

    this.webapi.getProduct().subscribe((data=>{
      this.productList=data;
      console.log(data);
    }))
  }

  AddToCart(ItemAddedtocart:any){
    this.webapi.addtocartService(ItemAddedtocart);
    // this.cardItemList.push(ItemAddedtocart)
    // alert("Item Added Successfully into cart")
    // console.log("call",this.cardItemList);
  }

}
