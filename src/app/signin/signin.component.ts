import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AutheService } from '../authe.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  test=new BehaviorSubject([])
  username:any
  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required])
  })
  hide =true
  constructor(private _AutheService:AutheService , private _Router:Router , private _AngularFirestore:AngularFirestore , private _UsersService:UsersService) { }

  submit(){
    if(!this.loginForm.valid){
      return;
    }else{
      const {email,password} = this.loginForm.value;
      this._AutheService.login(email,password).subscribe((res)=>{
        localStorage.setItem('usertoken', JSON.stringify(res.user.uid));
        this._AutheService.userId = res.user.uid
        this.userdata(res.user.uid)
          this._Router.navigate(['/home'])
          alert('Signin is Sucessfully')
      },(error)=>{
        alert(error);
      })
    }
  }

  userdata(id:any){
    this._UsersService.getuserdata(id).subscribe(res=>{
      this.username=res
    })
  }
  ngOnInit(): void {
  }
}
