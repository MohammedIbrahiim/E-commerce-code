import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { AutheService } from './../authe.service';
import { UsersService } from './../users.service';
AutheService
OrdersService
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalItem :number = 0
  username:any
  islogin:boolean=false
  isclicked :boolean =false
  name:any
    constructor(private _AutheService:AutheService , private _OrdersService:OrdersService ,private _Router:Router,private _UsersService
:UsersService

  ) { }

    ngOnInit(): void {
      this._AutheService.user.subscribe(user=>{
        if(user){
          this.islogin=true
          this._AutheService.userId=user.uid
            this.userdata(this._AutheService.userId)
        }
      })
      this._OrdersService.getProduct().subscribe(res=>{
        this.totalItem =res.length
        // this.test = this._AutheService.curentUser$.getValue()

      })
    }
    logout(){
      this._AutheService.logout();
      this._Router.navigate(['/signin'])
    }
    userdata(id:any){
      this._UsersService.getuserdata(id).subscribe(res=>{
          this.username=res
          this.name = this.username.name
      })
    }
}
