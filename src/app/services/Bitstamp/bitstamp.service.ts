import { Injectable } from '@angular/core';
import { BitstampBTC } from '../../classes/Bitstamp/bitstamp-btc';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitstampService {

  constructor(private http: HttpClient) { }
  bitStampUrl= 'https://www.bitstamp.net/api/v2/ticker/btcusd/';

  getBitstamp() : Observable<BitstampBTC>
  {
    return this.http.get<BitstampBTC>(this.bitStampUrl);
  }

}
