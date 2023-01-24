import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EditVehiclePageComponent } from './edit-vehicle-page.component';
import { FormBuilder } from '@angular/forms';

fdescribe('EditVehiclePageComponent', () => {
  let component: EditVehiclePageComponent;
  let fixture: ComponentFixture<EditVehiclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVehiclePageComponent ],
      imports: [
        HttpClientTestingModule,
   
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
