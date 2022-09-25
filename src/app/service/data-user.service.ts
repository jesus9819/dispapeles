
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  constructor(private http:HttpClient) { }

  getUsuarios(){
  return this.http.get<any>(`${environment.url}/api/v1/person`);
  }
  deleteUsurarios(id:number){
    return this.http.delete<any>(`${environment.url}/api/v1/person/${id}`)
  }
  getTipoId(){
    return this.http.get<any>(`${environment.url}/api/v1/tipoidentificacion`);
  }
}
