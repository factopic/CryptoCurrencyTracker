import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoindeltaClass } from '../../class/coindelta-class';

@Injectable({
  providedIn: 'root'
})

export class CoindeltaService {

  constructor(private http: HttpClient) { }
  coindeltaUrl= 'https://api.coindelta.com/api/v1/public/getticker/';

  getCoindelta(): Observable<CoindeltaClass>
  {
    return this.http.get<CoindeltaClass>(this.coindeltaUrl);
  }
  
}
