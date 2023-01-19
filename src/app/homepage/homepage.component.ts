import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  vehicles: any;

  chartData = [
    {
      data: [25300, 34350, 35520, 31500],
      label: 'Nissan Bluebird'
    },
    {
      data: [35700, 21300, 20550, 33650],
      label: 'Suzuki Alto'
    },
    {
      data: [15500, 20150, 17800, 19650],
      label: 'Toyota Corolla'
    },
    {
      data: [43570, 25860, 52450, 52800],
      label: 'Honda Civic'
    },
  ];

  chartLabels = [
    'Jan-Mar',
    'Apr-Jun',
    'Jul-Sep',
    'Oct-Dec'
  ];

  lineChartData = {
    
    labels: [
    'Jan-Mar',
    'Apr-Jun',
    'Jul-Sep',
    'Oct-Dec'],
    
    datasets: [
      {
        
        data: [45300, 17350, 45520, 31500],
        label: 'Nissan Bluebird'
        
      },
      {
     
        data: [25700, 34300, 20550, 33650],
        label: 'Suzuki Alto'

      },
      {
       
        data: [15500, 20150, 27800, 19650],
        label: 'Toyota Corolla'

      },
      {
        
        data: [43570, 25860, 52450, 52800],
        label: 'Honda Civic'

      }
    ]
    
  }

  constructor( private auth:AuthService, private router:Router){}

  ngOnInit(): void {
    this.loadvehicles();
}

loadvehicles(){
  this.auth.getlast4().subscribe((data:any)=>{
    //console.log(data);
    this.vehicles = data;

  })
}


}
