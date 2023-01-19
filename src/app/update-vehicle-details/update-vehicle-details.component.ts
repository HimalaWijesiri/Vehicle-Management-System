import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-update-vehicle-details',
  templateUrl: './update-vehicle-details.component.html',
  styleUrls: ['./update-vehicle-details.component.css']
})
export class UpdateVehicleDetailsComponent {

  addvehicledetailsForm!: FormGroup;
  message:string ='';
  isProcess:boolean = false;
  className = 'd-none'
  id: any;
  getname: any;

  constructor(private fb:FormBuilder, private auth:AuthService, private url:ActivatedRoute, private router:Router) {
  this.addvehicledetailsForm = this.fb.group({
    'v_id':['',Validators.required],
    'v_name':['',Validators.required],
    'date':['',Validators.required],
    'description':['',Validators.required],
    'amount':['',Validators.required]
    })
   }
  
  ngOnInit(): void {
   
      this.id = this.url.snapshot.params['id'];
      console.log(this.id)
     
      this.auth.vehicledetailrecord(this.id).subscribe(data=>{
        console.log(data);
        this.addvehicledetailsForm.patchValue(data);
        this.getname = data;
      })
  
    }
  
  updatevehicle(){
  
   if (this.addvehicledetailsForm.valid) {
      let data = this.addvehicledetailsForm.value;
      this.auth.updatedetail(this.id, data).subscribe(() => {
      this.router.navigate(['/Main/View-Vehicle-Details']);
      });
      }  
  }
  
  }



