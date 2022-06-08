import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AutheService } from './authe.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  docRef:string ='';

  constructor(private _AngularFirestore:AngularFirestore , private _AngularFireStorage:AngularFireStorage , private _AutheService:AutheService ) { }
  getallproduct(){
    return this._AngularFirestore.collection('products').snapshotChanges()
  }
  addnewproduct(title:string,price:number,image:any,discrption:string ,quantity:number=1 ){
    return new  Promise((resolve, reject) => {
      let ref = this._AngularFireStorage.ref('products/'+image.name)
      ref.put(image).then(()=>{
        ref.getDownloadURL().subscribe(img=>{
          this._AngularFirestore.collection('products').add({
            title,
            price,
            img,
            discrption,
            quantity,

          }).then(()=>resolve('hello'))
        })
      })
    });

  }
  deleteproduct(id:any){
  return this._AngularFirestore.doc(`users/${this._AutheService.userId}/cart/${id}`).delete()
  }
}

