import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AutheService } from '../authe.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string=''
  loginForm = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    city : new FormControl(null,[Validators.required]),
    email:new FormControl(null ,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required])
  })
  hide = true
  test:any
  username:any
  record:any={}
  constructor(private _AutheService:AutheService ,private _Router:Router , private _UsersService:UsersService) { }
  submit(){
    if(!this.loginForm.valid){
      return;
    }else{
      const {name , email,password,city} = this.loginForm.value;
      // this._AutheService.curentUser$.next(name);
      // this.test = this._AutheService.curentUser$.getValue()
      this._AutheService.signup(email,password).subscribe((res)=>{
        this._AutheService.userId = res.user.uid
        this.userdata(res.user.uid)
          this._UsersService.addnewUser(res.user.uid,name,city)
            // this._AutheService.userId = res.user.uid
            this._Router.navigate(['/signin'])
            alert('Signup is Sucessfully')

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
