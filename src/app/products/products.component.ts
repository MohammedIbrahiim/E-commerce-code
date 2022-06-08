import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';
ProductsService
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]=[]
  Sports_Clouths:any
  Sports_Flags: any[] | undefined;
  Sports_shoe: any[] | undefined;
  constructor(private _OrdersService:OrdersService , private _ProductsService:ProductsService) { }
    ngOnInit(): void {
      this._ProductsService.getallproduct().subscribe(res=>{
        this.products = res.map(ele=>{
          return {
            id: ele.payload.doc.id,
            ...(ele.payload.doc.data() as Record<string, unknown>)
          }
        })
          this.Sports_Clouths = this.products.filter(item=>{
            return item.title=='Sports-Clouths'
        })
          this.Sports_Flags = this.products.filter(item=>{
            return item.title=='Sports-Flags'
        })
          this.Sports_shoe = this.products.filter(item=>{
            return item.title=='Sports-shoe'
        })
      })

    }

    isClicked1(id:number){
      let btn1 = document.getElementById(`btn${id}`) as HTMLElement;
      let btn2 = document.getElementById(`btn1${id}`) as unknown as HTMLElement
      btn1.innerHTML = 'Done'

      btn2.innerHTML = 'Done'
    }

    addTocart(product:any ,id:number){
      let btn = document.getElementById(`btn${id}`) as HTMLElement;
      let btn2 = document.getElementById(`btn1${id}`) as unknown as HTMLElement
      if(btn.innerHTML=='Add To Card'|| btn2.innerHTML=='Add To Card'){
        this._OrdersService.addtocart(product)
      }else{
        btn.innerHTML = 'Done'
      }
    }
}
