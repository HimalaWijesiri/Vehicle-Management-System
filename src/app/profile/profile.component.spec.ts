import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*

it('should create', fakeAsync(() =>{
  component.ngOnInit();
  tick();
  fixture.detectChanges();
  expect(component).toBeTruthy();
}))

  
  it('should assign a value to the property', () => {
    component.getProfile();
    expect(component.data).toBeDefined();
    expect(component.data).toEqual('');
});


  it('should retrieve data from the database and assign it to the property', () => {
    const testData = { firstname: 'Asif' };
    spyOn(authService, 'getProfile').and.returnValue(of(testData));

    fixture.detectChanges();
    expect(component.data).toEqual(testData);
    expect(authService.getProfile).toHaveBeenCalled();
});

  it('should call the function getProfile', () => {
    spyOn(component, 'getProfile');
    component.getProfile();
    expect(component.getProfile).toHaveBeenCalled();
  });

  it('should return the expected output', () => {
    const result = component.getProfile();
    expect(result).toBeTruthy();
});


  it('should retrieve data from the database', () => {
    const data = [{firstname:'Asif'},{surname:'Khan'},{email:'asifkhan@gmail.com'},{password:'asif1234'}];
    spyOn(authService,'getProfile').and.returnValue(of(data));

    component.ngOnInit();
    expect(authService.getProfile).toHaveBeenCalled();
  });
*/
});
