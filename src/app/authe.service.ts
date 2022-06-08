import { Injectable } from '@angular/core';
import { BehaviorSubject,from, Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from 'firebase/firestore';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class AutheService {

  curentUser$ = new BehaviorSubject(null)
  user : Observable<firebase.default.User|null>
  test = new BehaviorSubject(null)
  userId :string =''
  constructor(private _Auth:Auth ,private _AngularFireAuth:AngularFireAuth) {
      this.user = _AngularFireAuth.user
}

  login(username:string , password:string){
    return from (signInWithEmailAndPassword(this._Auth,username,password))
  }

  signup(username:string , password:string){
    return from (createUserWithEmailAndPassword(this._Auth,username , password))

  }
  logout(){
    return this._Auth.signOut()
  }
}
