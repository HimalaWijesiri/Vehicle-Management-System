import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let id: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should insert a vehicle into the database', () => {
    const data = {
      vehiclename: 'Audi i8',
      model: 'i8',
      modelnum: '4785691230',
      brand: 'Audi',
      engcap: '1800cc',
      transmission: 'Auto',
      yom: '2018/02/31',
      mileage: '15240KM',
      price: '185559990',
    };
    service.addvehicle(data).subscribe((response) => {
      expect(response).toEqual({ success: true });
    });

    const req = httpMock.expectOne(`http://localhost:8080/auth/add-vehicle`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });

  it('should insert user data into the database when logged in', () => {
    const data = {
      email: 'asifkhan@gmail.com',
      password: 'asif1234',
    };
    service.signin(data).subscribe((response) => {
      expect(response).toEqual({ success: true });
    });

    const req = httpMock.expectOne(`http://localhost:8080/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });

  it('should insert a user into the database', () => {
    const data = {
      firstname: 'Asif',
      surname: 'Khan',
      email: 'asifkhan@gmail.com',
      password: 'asif1234',
    };
    service.signup(data).subscribe((response) => {
      expect(response).toEqual({ success: true });
    });

    const req = httpMock.expectOne(`http://localhost:8080/auth/register`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });

  it('should insert vehcile details into the database', () => {
    const data = {
      v_name: 'Audi i8',
      date: '2023-01-05',
      description: 'Car Service + Oil Changes',
      amount: '50000',
    };
    service.addvehicledetails(data).subscribe((response) => {
      expect(response).toEqual({ success: true });
    });

    const req = httpMock.expectOne(
      `http://localhost:8080/auth/add-vehicle-details`
    );
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get vehicle details', () => {
    service.getlast4().subscribe((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpMock.expectOne(
      'http://localhost:8080/auth/latest-vehicles'
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      results: [
        {
          vehiclename: 'Audi i8',
          model: 'i8',
          modelnum: '4785691230',
          brand: 'Audi',
          engcap: '1800cc',
          transmission: 'Auto',
          yom: '2018/02/31',
          mileage: '15240KM',
          price: '185559990',
        },
      ],
    });
  });

  it('should get user details', () => {
    service.getProfile().subscribe((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:8080/auth/profile');
    expect(req.request.method).toBe('GET');
    req.flush({
      results: [
        {
          firstname: 'Asif',
          surname: 'Khan',
          email: 'asifkhan@gmail.com',
          password: 'asif1234',
        },
      ],
    });
  });

  it('should get vehicle list', () => {
    service.listvehicle().subscribe((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:8080/auth/');
    expect(req.request.method).toBe('GET');
  });
});
