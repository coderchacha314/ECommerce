import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiService } from '../services/webapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartLength:any;
  constructor(private route:Router,private webapi:WebapiService) {
  
   }
 
  ngOnInit(): void {
    
   }
  
  NavtoCart()
  {
    this.cartLength=this.webapi.CartItemAdded.length;
    this.route.navigate(['/cart']);
  }
  NavtoProduct(){
    this.route.navigate(['/products']);
  }
}
