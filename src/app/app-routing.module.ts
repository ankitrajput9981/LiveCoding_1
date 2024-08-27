import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AppComponent } from './app.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path : 'seller-auth',
    component : SignupAuthComponent
    
  },
  {
    path : 'seller-home',
    component : SellerHomeComponent,
    
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
