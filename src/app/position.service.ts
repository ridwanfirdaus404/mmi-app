import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Positions } from './positions';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private baseUrl = "http://localhost:8080/api/position"
  constructor(public httpClient: HttpClient) { }

  getPositionList(): Observable<Positions[]>{
    return this.httpClient.get<Positions[]>(`${this.baseUrl}`);
  }

  getEmployeeId(id: number): Observable<Positions>{
    return this.httpClient.get<Positions>(`${this.baseUrl}/${id}`);
  }
}
