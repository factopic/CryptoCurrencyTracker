import { Component, OnInit } from '@angular/core';

import { ZebpayClass } from '../../class/zebpay-class';
import { ZebpayService } from '../../services/zebpay/zebpay.service';



@Component({
  selector: 'app-zebpay',
  templateUrl: './zebpay.component.html',
  styleUrls: ['./zebpay.component.css']
})
export class ZebpayComponent implements OnInit {

  constructor(private zebService: ZebpayService ) { }
 
  

  varZebBTC: ZebpayClass;
  varZebETH: ZebpayClass;
  varZebLTC: ZebpayClass;

  varZebXRP: ZebpayClass;
  varZebOMG: ZebpayClass;
  varZebTRX: ZebpayClass;

  varZebEOS: ZebpayClass;
  varZebGNT: ZebpayClass;
  varZebAE: ZebpayClass;
  varZebZRX: ZebpayClass;


  public errorMsg;



  ngOnInit() 
  {
    
    this.showZebBTC();
 /*   this.showZebETH();
    this.showZebLTC();

    this.showZebXRP();
    this.showZebTRX();
    this.showZebOMG();

    this.showZebEOS();
    this.showZebAE();
    this.showZebGNT();
    this.showZebZRX();
    */
  }


  showZebBTC()
  {
    this.zebService.getZebBTC().subscribe( (data:ZebpayClass)=>{
      console.log("Hi Zebpay BTC");
      this.varZebBTC = data,
      error => this.errorMsg = error;
      document.write(this.errorMsg);
      window.alert(this.errorMsg);
      
    });
  }




  showZebETH()
  {
    this.zebService.getZebEth().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay ETH");
    this.varZebETH =data;
  })
  }


  showZebLTC()
  {
    this.zebService.getZebLtc().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay LTC");
    this.varZebLTC =data;
  })
  }







  showZebXRP()
  {
    this.zebService.getZebXrp().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay xrp");
    this.varZebXRP =data;
  })
  }



  showZebTRX()
  {
    this.zebService.getZebTrx().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay TRX");
    this.varZebTRX =data;
  })
  }



  showZebOMG()
  {
    this.zebService.getZebOmg().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay OMG");
    this.varZebOMG =data;
  })
  }



  showZebGNT()
  {
    this.zebService.getZebGnt().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay LTC");
    this.varZebGNT =data;
  })
  }

  showZebAE()
  {
    this.zebService.getZebAe().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay AE");
    this.varZebAE =data;
  })
  }



  showZebEOS()
  {
    this.zebService.getZebEos().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay EOS");
    this.varZebEOS =data;
  })
  }


  showZebZRX()
  {
    this.zebService.getZebZrx().subscribe( (data:ZebpayClass)=>{
    console.log("Hi Zebpay ZRX");
    this.varZebZRX =data;
  })
  }






}
