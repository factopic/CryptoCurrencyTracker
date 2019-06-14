import { Component, OnInit } from '@angular/core';

import { KoinexClass } from '../../classes/koinex/koinex-class';
import { KoinexService } from '../../services/koinex/koinex.service';



@Component({
  selector: 'app-koinex',
  templateUrl: './koinex.component.html',
  styleUrls: ['./koinex.component.css']
})
export class KoinexComponent implements OnInit {

  constructor(private koinexService: KoinexService) { }

  varKoinex :KoinexClass;
  id;
  varflag = true;



  ngOnInit() {

    console.log("OnInit Started..........")
    this.showKoinex();
     
     this.id= setInterval(a=>{
        this.showKoinex();
      },30000,[]);
      
      


     this.id = setInterval( ()=>{    //<<<---    using ()=> syntax
        this.changeColour();
   }, 500);


      console.log("OnInit Ended..........")
    }







     changeColour() 
     {

      if(this.varflag==true)
      {
        document.getElementById("myId").style.backgroundColor="yellow";
        this.varflag = false;
      }
      else if (this.varflag==false){
        document.getElementById("myId").style.backgroundColor="white";
      this.varflag = true;
      }

      
     }




/*

     autoSlide(){
	
						
				
      var i;
      var slides = document.getElementById("myId");
      
      
      
      for (i=0; i<slides.length; i++) 
      {
        slides[i].style.display = "none";
      };
      
 
      
      slideIndex++;
      if( slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      
     
      setTimeout(this.autoSlide() , 2000);
      
    }




*/

























  showKoinex(){
    this.koinexService.getKoinex().subscribe((data:KoinexClass)=>{
      console.log(data);
      this.varKoinex=data;
      });
      
    }

    /*stop setInterval() when user navigate away (by routing) to another component?
    https://stackoverflow.com/questions/37116619/angular-2-setinterval-keep-running-on-other-component

    */
    ngOnDestroy()
    {
      if(this.id)
      {
        clearInterval(this.id);
      }
    };
    

}
