import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-edit-vehicle-page',
  templateUrl: './edit-vehicle-page.component.html',
  styleUrls: ['./edit-vehicle-page.component.css']
})
export class EditVehiclePageComponent implements OnInit {
  vehicles: any;
  
  constructor( private auth:AuthService, private routes:Router){
    
  }

  ngOnInit(): void {
  this.loadvehicles();
  }

  loadvehicles(){
    this.auth.listvehicle().subscribe((data:any)=>{
      //console.log(data);
      this.vehicles = data;

    })
  }

  delvehicle(datas:any){
    this.auth.deletevehicle(datas._id).subscribe(data=>{
      console.log(data);
      this.vehicles = this.vehicles.filter((u:any)=>u!==datas)
})
  }
  

}
