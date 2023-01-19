import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/register', data)
  }

  signin(data:any):Observable<any>{
    
    return this.http.post('http://localhost:8080/auth/login', data)
  }

  getProfile():Observable<any>{
    const headers = {
      'Authorization':"Bearer " + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:8080/auth/profile', {headers:headers})
  }

  addvehicle(data:any):Observable<any>{
    
    return this.http.post('http://localhost:8080/auth/add-vehicle', data)
  }

  listvehicle(){
    return this.http.get('http://localhost:8080/auth/')
  }

  getlast4(){
    return this.http.get('http://localhost:8080/auth/latest-vehicles')
  }

  deletevehicle(id:any){
    return this.http.delete('http://localhost:8080/auth/del-vehicle/' + id)
  }

  singlevehicle(id:any){
    return this.http.get('http://localhost:8080/auth/edit-vehicle/' + id)
  } 

  updatevehicle(id:any, vehicle: any) {
  return this.http.put('http://localhost:8080/auth/update-vehicle/' +id, vehicle);
  }

  addvehicledetails(data:any):Observable<any>{
    
    return this.http.post('http://localhost:8080/auth/add-vehicle-details', data)
  }

  vehicledetails(id:any){
    return this.http.get('http://localhost:8080/auth/details/view-details/' +id)
  }

  deldetail(id:any){
    return this.http.delete('http://localhost:8080/auth/del-detail/' + id)
  }

  vehicledetailrecord(id:any){
  return this.http.get('http://localhost:8080/auth/edit-vehicle-detail-records/' + id)
}

  updatedetail(id:any, detail: any) {
    return this.http.put('http://localhost:8080/auth/update-vehicle-records/' +id, detail);
    }
}