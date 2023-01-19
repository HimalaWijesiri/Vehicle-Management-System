import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-vehicle-details',
  templateUrl: './add-vehicle-details.component.html',
  styleUrls: ['./add-vehicle-details.component.css']
})
export class AddVehicleDetailsComponent implements OnInit{

  id: any = this.route.snapshot.paramMap.get('id');
  addvehicledetailsForm!: FormGroup;
  message:string ='';
  isProcess:boolean = false;
  className = 'd-none'
  getname: any;

constructor(private fb:FormBuilder, private auth:AuthService, private route: ActivatedRoute, private router:Router ) {
  this.addvehicledetailsForm = this.fb.group({
    'v_id':['',Validators.required],
    'v_name':['',Validators.required],
    'date':['',Validators.required],
    'description':['',Validators.required],
    'amount':['',Validators.required]

  })
 }
 
 
  ngOnInit(): void {

  //console.log(this.id);
  this.auth.singlevehicle(this.id).subscribe(data=>{
    console.log(data);
    this.getname = data;
  })
  
  }

  addvehicledetails(){

    this.isProcess = true;
    const data = this.addvehicledetailsForm.value;
    delete data ['confirm']
    this.auth.addvehicledetails(data).subscribe(res=>{
      if(res.success){
        this.isProcess = false;
        this.message = "Record Added Successfully! ";
        this.className = 'alert alert-success';
      }else{
        this.isProcess = false;
        this.message = res.message;
        this.className = 'alert alert-danger';
      }
      this.addvehicledetailsForm.reset();
    },err=>{
      this.isProcess = false;
        this.message = " Server Error! Try again Later ";
        this.className = 'alert alert-danger'
    })
    this.router.navigate(['/Main/View-Vehicle-Details']);
  }

}
