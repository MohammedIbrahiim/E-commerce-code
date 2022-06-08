import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheackoutComponent } from './cheackout/cheackout.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { OrderSuccesComponent } from './order-succes/order-succes.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';


const routes: Routes = [

  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'cheackout'  ,component:CheackoutComponent,canActivate:[AuthGuard]},
  {path:'home' , component:HomeComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'products' ,component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'orders' ,component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'ordersuccess' , component:OrderSuccesComponent ,canActivate:[AuthGuard]},
  {path:'myorder',component:MyorderComponent ,canActivate:[AuthGuard]},
  {path:'manageproduct' , component:ManageproductComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
