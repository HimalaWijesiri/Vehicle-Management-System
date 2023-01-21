import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AddVehicleDetailsComponent } from './add-vehicle-details.component';

fdescribe('AddVehicleDetailsComponent', () => {
  let component: AddVehicleDetailsComponent;
  let fixture: ComponentFixture<AddVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleDetailsComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',fakeAsync( () => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(component).toBeTruthy();
  })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
