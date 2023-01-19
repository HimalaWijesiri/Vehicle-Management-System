import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent {

  addvehicleForm!: FormGroup;
  message:string ='';
  isProcess:boolean = false;
  className = 'd-none'
  id: any;
 

  constructor(private fb:FormBuilder, private auth:AuthService, private url:ActivatedRoute, private router:Router) {
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
 
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.auth.singlevehicle(this.id).subscribe(data=>{
      this.addvehicleForm.patchValue(data);
    })

  }

updatevehicle(){

 if (this.addvehicleForm.valid) {
    let data = this.addvehicleForm.value;
    this.auth.updatevehicle(this.id, data).subscribe(() => {
    this.router.navigate(['/Main/Manage-Vehicles']);
    });
    }  
}

}