import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  details: any;
  id: any;

  constructor( private auth:AuthService, private routes:Router, private url: ActivatedRoute){
    
  }
  
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id)
    this.vehicledetails();
  }

  vehicledetails(){
    this.auth.vehicledetails(this.id).subscribe((data)=>{
      console.log(data);
      this.details = data;

    })
  }

  deldetail(datas:any){
    this.auth.deldetail(datas._id).subscribe(data=>{
      console.log(data);
      this.details = this.details.filter((u:any)=>u!==datas)
})
  }

}
