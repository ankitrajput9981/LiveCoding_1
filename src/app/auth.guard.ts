// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicService } from './services/servic.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(
    private sellerServcie : ServicService

  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.sellerServcie.isSellerLoginIn;
  }
}