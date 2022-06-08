import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from '../orders.service';
import { Product } from './../product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  test = new BehaviorSubject(1)
  grandTotal:number = 0
  aytest:Product[]=[]
  exx:Product[]=[]
  constructor(private _OrdersService:OrdersService) { }

  ngOnInit(): void {
    this._OrdersService.getProduct().subscribe(res=>{
    this.aytest = res
      this.totalprice(res)
  })
  }
  totals():any{
    this.grandTotal = this._OrdersService.getTotalprice()
  }
  increment(product:any,index:any){
    if(product.quantity>=0){
      product.quantity+=1
      this.totalprice(product)
      this.totals()
    }

  }

  totalprice(product:any){

  this.test.next(product.quantity)
  // this.total = product.total
  product.total = product.quantity * product.price
  this.totals()
}
  decrement(product:any,index:any){
    if(product.quantity){
      product.quantity-=1
      this.totalprice(product)
    }
  }
}
