import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Singup } from '../data-type';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServicService {
  isSellerLoginIn = new BehaviorSubject<boolean>(false)
  constructor(
    private http: HttpClient,
    private router : Router
  ) { }
  signup(data:Singup){
    console.log("https");
    let oo = this.http.post('http://localhost:3000/seller', data , {observe : 'response'}).subscribe((result)=>{
      this.isSellerLoginIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])

    })

  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoginIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }
}
