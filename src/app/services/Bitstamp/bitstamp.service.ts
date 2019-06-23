import { Injectable } from '@angular/core';
import { BitstampBTC } from '../../classes/Bitstamp/bitstamp-btc';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitstampService {

  constructor(private http: HttpClient) { }
  bitStampUrlBtc= 'https://www.bitstamp.net/api/v2/ticker/btcusd/';
  bitStampUrlEth ='https://www.bitstamp.net/api/v2/ticker/ethusd/';
  bitStampUrlLtc ='https://www.bitstamp.net/api/v2/ticker/ltcusd/';
  bitStampUrlXrp ='https://www.bitstamp.net/api/v2/ticker/xrpusd/';
  bitStampUrlBch ='https://www.bitstamp.net/api/v2/ticker/bchusd/';
  
  getBitstampBtc() : Observable<BitstampBTC>
  {
    return this.http.get<BitstampBTC>(this.bitStampUrlBtc);
  }

  getBitstampEth() : Observable<BitstampBTC>
  {
    return this.http.get<BitstampBTC>(this.bitStampUrlEth)
  }

  getBitStampLtc(): Observable<BitstampBTC>
  {
    return this.http.get<BitstampBTC>(this.bitStampUrlLtc)
  }

  getBitStampXrp(): Observable<BitstampBTC>
  {
    return this.http.get<BitstampBTC>(this.bitStampUrlXrp);
  }

  getBitStampBch(): Observable<BitstampBTC>
  {
    return this.http.get<BitstampBTC>(this.bitStampUrlBch);
  }
}
