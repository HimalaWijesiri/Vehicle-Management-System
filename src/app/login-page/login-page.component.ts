import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  loginForm!:FormGroup

constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) {

  this.loginForm = this.fb.group({

    'email':['',[Validators.required, Validators.email]],
    'password':['',Validators.required],
  
  })
 

}

ngOnInit(): void {
  
}

login() {
 // alert("Login Successfull!")
  const data = this.loginForm.value;
  this.auth.signin(data).subscribe((res)=>{
    if(res.success){
      localStorage.setItem('token', res.token)
    this.router.navigate(['/Main/Home'])
    }else{
      alert(res.message)
    }
  }, err=>{
      alert(" Login failed! ")
    })
  }

}
