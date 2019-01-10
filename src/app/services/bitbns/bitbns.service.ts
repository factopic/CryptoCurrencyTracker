import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BitbnsClass } from '../../class/bitbns-class';

@Injectable({
  providedIn: 'root'
})

export class BitbnsService {

  constructor(private http: HttpClient) {}
  bitbnsUrl= 'https://bitbns.com/order/getTickerWithVolume/';

  getBitbns(): Observable<BitbnsClass>
  {
    return this.http.get<BitbnsClass>(this.bitbnsUrl);
  }
}
