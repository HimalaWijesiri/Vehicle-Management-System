import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehiclePageComponent } from './edit-vehicle-page/edit-vehicle-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { VehicleDetailPageComponent } from './vehicle-detail-page/vehicle-detail-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AddVehicleDetailsComponent } from './add-vehicle-details/add-vehicle-details.component';
import { UpdateVehicleDetailsComponent } from './update-vehicle-details/update-vehicle-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full'},
  { path: 'Login', component: LoginPageComponent, pathMatch: 'full'  },
  { path: 'Register', component: RegisterPageComponent, pathMatch: 'full'},
  { path: 'update-vehicle/:id', component: UpdateVehicleComponent},
  
  { path: 'Add-Vehicle-Details/:id', component: AddVehicleDetailsComponent},
  { path: 'Update-Vehicle_details/:id', component: UpdateVehicleDetailsComponent},
  {
    path: 'Main' , component:SidebarComponent, children: [
  { path: 'Details/:id', component: DetailPageComponent},
  { path: 'Home', component: HomepageComponent, pathMatch: 'full'},
  { path: 'Add-Vehicles', component: AddVehicleComponent},
  { path: 'Manage-Vehicles', component: EditVehiclePageComponent},
  { path: 'View-Vehicle-Details', component: VehicleDetailPageComponent},
  { path: 'Profile', component:ProfileComponent},
  
    ]  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
