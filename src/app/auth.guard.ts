import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutheService } from './authe.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _AutheService:AutheService , private _Router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise(resolve=>{
        this._AutheService.user.subscribe(user=>{
          if(user){
            resolve(true)
          }else{
            this._Router.navigate(['/signin'])
            resolve(false)
          }
        })
      })
    }

}
