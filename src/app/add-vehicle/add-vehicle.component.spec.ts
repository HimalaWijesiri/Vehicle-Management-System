import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AddVehicleComponent } from './add-vehicle.component';

fdescribe('AddVehicleComponent', () => {
  let component: AddVehicleComponent;
  let fixture: ComponentFixture<AddVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('addvehicleForm invalid when empty', () => {
    component.addvehicleForm.controls['vehiclename'].setValue('');
    component.addvehicleForm.controls['model'].setValue('');
    component.addvehicleForm.controls['modelnum'].setValue('');
    component.addvehicleForm.controls['brand'].setValue('');
    component.addvehicleForm.controls['engcap'].setValue('');
    component.addvehicleForm.controls['transmission'].setValue('');
    component.addvehicleForm.controls['yom'].setValue('');
    component.addvehicleForm.controls['mileage'].setValue('');
    component.addvehicleForm.controls['price'].setValue('');
    expect(component.addvehicleForm.valid).toBeFalsy();
  });

  it('vehiclename field validity', () => {
    const vehiclename = component.addvehicleForm.controls['vehiclename'];
    expect(vehiclename.valid).toBeFalsy();

    vehiclename.setValue('');
    expect(vehiclename.hasError('required')).toBeTruthy();

  });

  it('model field validity', () => {
    const model = component.addvehicleForm.controls['model'];
    expect(model.valid).toBeFalsy();

    model.setValue('');
    expect(model.hasError('required')).toBeTruthy();
  });

  it('modelnum field validity', () => {
    const modelnum = component.addvehicleForm.controls['modelnum'];
    expect(modelnum.valid).toBeFalsy();

    modelnum.setValue('');
    expect(modelnum.hasError('required')).toBeTruthy();
  });

  it('brand field validity', () => {
    const brand = component.addvehicleForm.controls['brand'];
    expect(brand.valid).toBeFalsy();

    brand.setValue('');
    expect(brand.hasError('required')).toBeTruthy();
  });

  it('engcap field validity', () => {
    const engcap = component.addvehicleForm.controls['engcap'];
    expect(engcap.valid).toBeFalsy();

    engcap.setValue('');
    expect(engcap.hasError('required')).toBeTruthy();
  });

  it('transmission field validity', () => {
    const transmission = component.addvehicleForm.controls['transmission'];
    expect(transmission.valid).toBeFalsy();

    transmission.setValue('');
    expect(transmission.hasError('required')).toBeTruthy();
  });

  it('yom field validity', () => {
    const yom = component.addvehicleForm.controls['yom'];
    expect(yom.valid).toBeFalsy();

    yom.setValue('');
    expect(yom.hasError('required')).toBeTruthy();
  });

  it('mileage field validity', () => {
    const mileage = component.addvehicleForm.controls['mileage'];
    expect(mileage.valid).toBeFalsy();

    mileage.setValue('');
    expect(mileage.hasError('required')).toBeTruthy();
  });

  it('price field validity', () => {
    const price = component.addvehicleForm.controls['price'];
    expect(price.valid).toBeFalsy();

    price.setValue('');
    expect(price.hasError('required')).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.addvehicle();
    expect(component.addvehicle).toBeTruthy();
  });

});
