import { Component, OnInit } from '@angular/core';
import { AutheService } from '../authe.service';
import { UsersService } from './../users.service';

AutheService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _AutheService:AutheService , private _UsersService:UsersService) { }

  ngOnInit(): void {
    this._AutheService.user.subscribe(user=>{
      if(localStorage.getItem('usertoken') != null){
        this._UsersService.getuserdata(this._AutheService.userId)

      }else{
        console.log('whatsrong');
      }

    })
  }

}
