import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth } from '@angular/fire/auth';
import { AutheService } from './authe.service';
import { Product } from './product';


BehaviorSubject
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderitem :   any =[];
  quantity = new BehaviorSubject(1)
  productlist = new BehaviorSubject([])
  constructor(private _AngularFirestore:AngularFirestore, private _AutheService:AutheService) { }

  getProduct(){
    return this.productlist.asObservable();
    // return this._AngularFirestore.collection(`users/${this._AutheService.userId}/cart`).snapshotChanges()

  }

  setProduct(product:any){
    this.orderitem.push(...product);
    this.productlist.next(product)
  }

  addtocart(product:any){
    this.orderitem.push(product);
    this.productlist.next(this.orderitem);
    this.getTotalprice()
  }

  getprice():number{
    let grandTotal = 0;
    this.orderitem.map((a:any)=>{
      grandTotal = grandTotal + a.price

    })
    return grandTotal;
  }
test(product:any){
product.forEach((element: Product) => {
  this._AngularFirestore.collection(`users/${this._AutheService.userId}/cart`).add(element);
});

  // return this._AngularFirestore.doc(`users/${this._AutheService.userId}/cart/${this._AutheService.userId}`).set({
  //   product
  // })
}
  get_order(){
    return this._AngularFirestore.collection(`users/${this._AutheService.userId}/cart`).snapshotChanges()
}

  getTotalprice():number{
    let grandTotal = 0;
    this.orderitem.map((a:any)=>{
      grandTotal = grandTotal + a.total
    })
    return grandTotal;
  }
  removecartitem(product:any){
    this.orderitem.map((a:any , index:any)=>{
      if(product.id===a.id){
        this.orderitem.splice(index,1)
      }
    })
    this.productlist.next(this.orderitem)
  }

}

