import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get vehicle details', () =>{
    service.getlast4().subscribe(result => {
      expect(result).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:8080/auth/latest-vehicles');
    expect(req.request.method).toBe('GET')
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
          price: '185559990'
        }
      ]
    })
  })
});
