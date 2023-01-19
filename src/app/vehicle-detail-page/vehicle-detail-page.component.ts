import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.css']
})
export class VehicleDetailPageComponent implements OnInit {
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

}
