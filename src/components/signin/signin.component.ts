import { Component, OnInit } from '@angular/core';
import { BackendcallService } from 'src/services/backendcall.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:any={};
  constructor(public backendcall: BackendcallService, private router: Router) { }

  ngOnInit() {
  }
login() {

  this.backendcall.login(this.user).subscribe(data=>{
    this.router.navigate([""]);
    sessionStorage.setItem('token', JSON.stringify(data));
    console.log("Login Success");
    window.location.reload(true);
  },(err)=>{
    console.log(err);
    alert("Login not succsess");
  });

  }


}
