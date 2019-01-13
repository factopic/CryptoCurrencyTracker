import { Component, OnInit } from '@angular/core';
import { KoinexService } from '../../services/koinex/koinex.service';
import { KoinexClass } from '../../class/koinex-class';
import { CoindeltaClass } from '../../class/coindelta-class';
import { CoindeltaService } from '../../services/coindelta/coindelta.service';

@Component({
  selector: 'app-mixture',
  templateUrl: './mixture.component.html',
  styleUrls: ['./mixture.component.css']
})


export class MixtureComponent implements OnInit {

  constructor(private koinexService: KoinexService , private coindeltaService: CoindeltaService) { }
 
  
  varCoindelta:CoindeltaClass;
  varKoinex :KoinexClass;
  id;
  varflag = true;
  




  ngOnInit() {

    
    console.log("OnInit  Started  Koinex..........")
    this.showKoinex();
    console.log("OnInit  Ended  Koinex..........")


    console.log("OnInit  Started  Koinex..........")
    this.showCoindelta();
    console.log("OnInit  Ended  Koinex..........")

    
     this.id= setInterval(a=>{
        this.showKoinex();
        this.showCoindelta();
      },30000,[]);
      
   

      
    }







    showKoinex(){
      this.koinexService.getKoinex().subscribe((data:KoinexClass)=>{
        this.varKoinex=data;
        });
        
      }
  




      showCoindelta(){
        this.coindeltaService.getCoindelta().subscribe((data:CoindeltaClass)=>{

            this.varCoindelta=data;
          });
      }


        
      ngOnDestroy()
      {
        if(this.id)
        {
          clearInterval(this.id);
        }
      };


}
