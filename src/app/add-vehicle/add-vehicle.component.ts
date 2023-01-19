import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  
  addvehicleForm!: FormGroup;
  message:string ='';
  isProcess:boolean = false;
  className = 'd-none'
constructor(private fb:FormBuilder, private auth:AuthService) {
  this.addvehicleForm = this.fb.group({
    'vehiclename':['',Validators.required],
    'model':['',Validators.required],
    'modelnum':['',Validators.required],
    'brand':['',Validators.required],
    'engcap':['',Validators.required],
    'transmission':['',Validators.required],
    'yom':['',Validators.required],
    'mileage':['',Validators.required],
    'price':['',Validators.required]

  })
 }

  ngOnInit(): void {
  }

addvehicle(){

  this.isProcess = true;
  const data = this.addvehicleForm.value;
  delete data ['confirm']
  this.auth.addvehicle(data).subscribe(res=>{
    if(res.success){
      this.isProcess = false;
      this.message = "Vehicle Added Successfully! ";
      this.className = 'alert alert-success';
    }else{
      this.isProcess = false;
      this.message = res.message;
      this.className = 'alert alert-danger';
    }
    this.addvehicleForm.reset();
  },err=>{
    this.isProcess = false;
      this.message = " Server Error! Try again Later ";
      this.className = 'alert alert-danger'
  })
}

}



