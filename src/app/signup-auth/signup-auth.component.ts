import { Component } from '@angular/core';
import { ServicService } from '../services/servic.service';
import { Router } from '@angular/router';
import { Singup } from '../data-type';

@Component({
  selector: 'app-signup-auth',
  templateUrl: './signup-auth.component.html',
  styleUrl: './signup-auth.component.css'
})
export class SignupAuthComponent {
  constructor(
    private servicservice: ServicService,
    private router: Router
  ){

  }
  ngOnInit(){
    this.servicservice.reloadSeller()
  }
  SignUp(data:Singup){
    console.log(data);
    this.callAPI(data);
  }
  callAPI(data:Singup){
    // this.servicservice.signup(data).subscribe((res:any)=>{
    //   console.log(res);
    //   if(res){
    //     this.router.navigate(['seller-home']);
    //   }
    // })
    this.servicservice.signup(data);
  }
}
