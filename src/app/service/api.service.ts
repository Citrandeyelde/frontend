import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:1234/listar';  // URL de tu backend

  constructor(private http: HttpClient) { }

  public getData():Observable<any> {
    return this.http.get<any>(this.apiUrl); 
  }

  validatePlate(placa: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { placa });
  }


}
