import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from './../orders.service';
import { Product } from './../product';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheackout',
  templateUrl: './cheackout.component.html',
  styleUrls: ['./cheackout.component.css']
})
export class CheackoutComponent implements OnInit {
  products:Product[]=[]
  grandTotal:number = 0
  test = new BehaviorSubject(1)
  total :number = 0
  aytest:Product[]=[]
  item:Product[]=[]

  constructor(private _OrdersService:OrdersService, private _Router:Router) { }

  ngOnInit(): void {
    this._OrdersService.getProduct().subscribe(res=>{
      this.aytest = res
      this.totalprice(res,0)
      this.show_items()
    })
  }

  place_order = new FormGroup({
    name:new FormControl(null,[Validators.required ]),
    address_one:new FormControl(null,[Validators.required]),
    address_two:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
  })


  show_items(){
    this.item = this.aytest.map(obj=>{
      return obj});
  }
  addtofirebase(){
    this._OrdersService.test(this.aytest)
  }

  totals():any{
    this.grandTotal = this._OrdersService.getTotalprice()
  }
  totalprice(product:any,index:any){

    this.test.next(product.quantity)
    this.total = product.total
    product.total = product.quantity * product.price
    this.totals()
  }

  submit_order(submitinfo:FormGroup){
      if(submitinfo.value){
        this._Router.navigate(['/ordersuccess'])
      }else{
        console.log('yarab')
      }
  }

}
