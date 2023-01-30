import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

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

  it('should send user info into the database and check when logged in', () => {
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

  it('should get the latest 4 vehicle list', () => {
    service.getlast4().subscribe((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpMock.expectOne(
      'http://localhost:8080/auth/latest-vehicles'
    );
    expect(req.request.method).toBe('GET');
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve vehicle from database using an ID', inject(
    [AuthService],
    (service: AuthService) => {
      service.singlevehicle(id).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/edit-vehicle/' + id
      );
      expect(req.request.method).toBe('GET');
    }
  ));

  it('should retrieve vehicle details from database using an ID', inject(
    [AuthService],
    (service: AuthService) => {
      service.vehicledetails(id).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/details/view-details/' + id
      );
      expect(req.request.method).toBe('GET');
    }
  ));

  it('should retrieve vehicles detail records individualy from database by ID', inject(
    [AuthService],
    (service: AuthService) => {
      service.vehicledetailrecord(id).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/edit-vehicle-detail-records/' + id
      );
      expect(req.request.method).toBe('GET');
    }
  ));

  it('should delete vehicles from database by ID', inject(
    [AuthService],
    (service: AuthService) => {
      service.deletevehicle(id).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/del-vehicle/' + id
      );
      expect(req.request.method).toBe('DELETE');
    }
  ));

  it('should delete vehicles details from database by ID', inject(
    [AuthService],
    (service: AuthService) => {
      service.deldetail(id).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/del-detail/' + id
      );
      expect(req.request.method).toBe('DELETE');
    }
  ));

  it('should update vehicles from database by ID', inject(
    [AuthService],
    (service: AuthService) => {
      const vehicle = 'Audi i8';
      service.updatevehicle(id, vehicle).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/update-vehicle/' + id,
        vehicle
      );
      expect(req.request.method).toBe('PUT');
    }
  ));

  it('should update vehicles details from database by ID', inject(
    [AuthService],
    (service: AuthService) => {
      const detail = '63b6a5b812049541eb2461ba';

      service.updatedetail(id, detail).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/update-vehicle-records/' + id,
        detail
      );
      expect(req.request.method).toBe('PUT');
    }
  ));

  it('should update vehicles in database by ID', inject(
    [AuthService],
    (service: AuthService) => {
      const vehicle = 'Audi i8';

      service.updatevehicle(id, vehicle).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(
        'http://localhost:8080/auth/update-vehicle/' + id,
        vehicle
      );
      expect(req.request.method).toBe('PUT');
    }
  ));
});
