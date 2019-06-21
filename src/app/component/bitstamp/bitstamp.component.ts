import { Component, OnInit } from '@angular/core';
import { BitstampBTC } from '../../classes/Bitstamp/bitstamp-btc';
import { BitstampService } from '../../services/Bitstamp/bitstamp.service';

@Component({
  selector: 'app-bitstamp',
  templateUrl: './bitstamp.component.html',
  styleUrls: ['./bitstamp.component.css']
})
export class BitstampComponent implements OnInit {

  constructor(private bitStampService: BitstampService) { }

  varBitStampBtc : BitstampBTC;


  ngOnInit() {

    this.showBitStampBtc();
  }


  showBitStampBtc(){
    this.bitStampService.getBitstampBTC().subscribe( (data:BitstampBTC)=>{
      this.varBitStampBtc =data;
    })
  }


}
