import { ProfServiceService } from './../../services/prof-service.service';
import { EtdServiceService } from './../../services/etd-service.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../module';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  isAuthenticated: boolean = true;

  prof_group!:string;
  id!:number;
  
  role: any = {};
  username!:string;
  password!: string;
constructor(public authService : AuthService ,public router:Router ,public profServiceService:ProfServiceService,public etdServiceService:EtdServiceService) {}

ngOnInit(): void {
  
}

login (){
  console.log(this.username,this.password)
 this.authService.login({
  username: this.username,
  password: this.password,
  role: ""
}).subscribe(response=> {if(response.role =="ADMIN"){
  this.router.navigateByUrl('/nav-admin')
}else if(response.role=="PROF")
this.router.navigateByUrl('nav-prof')});
}
}

