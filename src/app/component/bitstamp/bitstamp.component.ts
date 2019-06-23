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
  varBitStampEth : BitstampBTC;
  varBitStampLtc : BitstampBTC;
  varBitStampXrp : BitstampBTC;
  varBitStampBch : BitstampBTC;

  ngOnInit() {

    this.showBitStampBtc();
    this.showBitStampEth();
    this.showBitStampLtc();
    this.showBitStmapXrp();
    this.showBitStampBch();
  }


  showBitStampBtc(){
    this.bitStampService.getBitstampBtc().subscribe( (data:BitstampBTC)=>{
      this.varBitStampBtc =data;
    })
  }



  showBitStampEth(){
    this.bitStampService.getBitstampEth().subscribe((data:BitstampBTC)=>{
      this.varBitStampEth = data;
    })
  }

  showBitStampLtc(){
    this.bitStampService.getBitStampLtc().subscribe( (data:BitstampBTC)=>{
      this.varBitStampLtc =data;
    })
  }

  showBitStmapXrp(){
    this.bitStampService.getBitStampXrp().subscribe( (data:BitstampBTC)=>{
      this.varBitStampXrp =data;
    })
  }

  showBitStampBch(){
    this.bitStampService.getBitStampBch().subscribe( (data:BitstampBTC)=>{
        this.varBitStampBch=data;
    })
  }


}
