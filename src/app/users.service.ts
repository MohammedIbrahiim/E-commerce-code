import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AutheService } from './authe.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  username:any
  name:any
  constructor(private _AngularFirestore:AngularFirestore , private _AutheService:AutheService , private _AngularFireAuth:AngularFireAuth) {

  }

  addnewUser(id:any,name:any,address:any){
    return this._AngularFirestore.doc('users/'+id).set({
      name,
      address
    })
  }

  getuserdata(id:any){
    // return this._AngularFirestore.collection('users').snapshotChanges()
    return this._AngularFirestore.collection<User>('users').doc(id).valueChanges()
  }

}
