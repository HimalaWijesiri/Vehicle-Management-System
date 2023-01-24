import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterPageComponent } from './register-page.component';

fdescribe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('signupform invalid when empty', () => {
    component.signupForm.controls['firstname'].setValue('');
    component.signupForm.controls['surname'].setValue('');
    component.signupForm.controls['email'].setValue('');
    component.signupForm.controls['password'].setValue('');
    component.signupForm.controls['cpass'].setValue('');
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('firstname field validity', () => {
    const firstname = component.signupForm.controls['firstname'];
    expect(firstname.valid).toBeFalsy();

    firstname.setValue('');
    expect(firstname.hasError('required')).toBeTruthy();

  });

  it('email field validity', () => {
    const surname = component.signupForm.controls['surname'];
    expect(surname.valid).toBeFalsy();

    surname.setValue('');
    expect(surname.hasError('required')).toBeTruthy();
  });

  it('phone field validity', () => {
    const email = component.signupForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

  });

  it('password field validity', () => {
    const password = component.signupForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

  });

  it('confirmPassword field validity', () => {
    const cpass = component.signupForm.controls['cpass'];
    expect(cpass.valid).toBeFalsy();

    cpass.setValue('');
    expect(cpass.hasError('required')).toBeTruthy();

  });

  it('should set submitted to true', () => {
    component.signup();
    expect(component.signup).toBeTruthy();
  });

});
