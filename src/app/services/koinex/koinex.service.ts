import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KoinexClass } from '../../class/koinex-class';

@Injectable({
  providedIn: 'root'
})
export class KoinexService {

  constructor(private http: HttpClient) { }
  koinexUrl= 'https://koinex.in/api/ticker';


  getKoinex() : Observable<KoinexClass>
  {
    return this.http.get<KoinexClass>(this.koinexUrl);
  }
}
