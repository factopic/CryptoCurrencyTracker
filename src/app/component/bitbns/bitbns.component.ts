import { Component, OnInit } from '@angular/core';
import { BitbnsService } from '../../services/bitbns/bitbns.service';
import { BitbnsClass } from '../../class/bitbns-class';

@Component({
  selector: 'app-bitbns',
  templateUrl: './bitbns.component.html',
  styleUrls: ['./bitbns.component.css']
})
export class BitbnsComponent implements OnInit {

  constructor(private bitbnsService: BitbnsService) { }

  varBitbns: BitbnsClass;
  displayedColumns: String[] = [ 'last_trade_price', 'highest_buy_bid' ,'lowest_sell_bid'];

  ngOnInit() { this.showBitbns }

  showBitbns(){
    this.bitbnsService.getBitbns().subscribe((data:BitbnsClass) =>{
      console.log(data);
      this.varBitbns=data;
    });
  }


}
