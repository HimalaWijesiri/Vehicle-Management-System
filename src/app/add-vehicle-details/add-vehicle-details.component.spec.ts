import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AddVehicleDetailsComponent } from './add-vehicle-details.component';
import { of } from 'rxjs';
import { AuthService } from '../service/auth.service';

describe('AddVehicleDetailsComponent', () => {
  let component: AddVehicleDetailsComponent;
  let fixture: ComponentFixture<AddVehicleDetailsComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleDetailsComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should retrieve data from the database', () => {
    const data = [{id:'63aefc8745eefeb07c7ce653'}];
    spyOn(authService,'singlevehicle').and.returnValue(of(data));

    component.ngOnInit();
    expect(authService.singlevehicle).toHaveBeenCalled();
    expect(component.getname).toEqual(data)
  });
*/
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});
