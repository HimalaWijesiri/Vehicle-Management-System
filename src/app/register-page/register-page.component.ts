import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent  implements OnInit {
  signupForm!: FormGroup;
  message:string ='';
  isProcess:boolean = false;
  className = 'd-none'
constructor(private fb:FormBuilder, private auth:AuthService) {
  this.signupForm = this.fb.group({
    'firstname':['',Validators.required],
    'surname':['',Validators.required],
    'email':['',Validators.required],
    'password':['',Validators.required],
    'cpass':['',Validators.required],
  })
 }

ngOnInit() : void {

}

signup(){
  if(this.signupForm.value.password===this.signupForm.value.cpass){
  this.isProcess = true;
  const data = this.signupForm.value;
  delete data ['confirm']
  this.auth.signup(data).subscribe(res=>{
    if(res.success){
      this.isProcess = false;
      this.message = "Account Created! Login to Continue ";
      this.className = 'alert alert-success';
    }else{
      this.isProcess = false;
      this.message = res.message;
      this.className = 'alert alert-danger';
    }
    //this.signupForm.reset();
  },err=>{
    this.isProcess = false;
      this.message = " Server Error! Try again Later ";
      this.className = 'alert alert-danger'
  })
}else{
  this.isProcess = false;
  this.message = "Passwords don;t Match! Try Again";
  this.className = 'alert alert-danger';
}
}

}
