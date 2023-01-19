import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleDetailPageComponent } from './vehicle-detail-page/vehicle-detail-page.component';
import { EditVehiclePageComponent } from './edit-vehicle-page/edit-vehicle-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AddVehicleDetailsComponent } from './add-vehicle-details/add-vehicle-details.component';
import { UpdateVehicleDetailsComponent } from './update-vehicle-details/update-vehicle-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomepageComponent,
    AddVehicleComponent,
    VehicleDetailPageComponent,
    EditVehiclePageComponent,
    SidebarComponent,
    ProfileComponent,
    UpdateVehicleComponent,
    DetailPageComponent,
    AddVehicleDetailsComponent,
    UpdateVehicleDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
