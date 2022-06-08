import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Product } from './../product';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  constructor(private _OrdersService:OrdersService , private _ProductsService:ProductsService) { }
  products:any[]=[]
  ngOnInit(): void {
    this._OrdersService.get_order().subscribe(res=>{
    this.products = res.map(item=>{
      return{
        id:item.payload.doc.id,
        ...(item.payload.doc.data() as Record<string, unknown>)  }
        })

    })

  }
}
