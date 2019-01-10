import { Component, OnInit } from '@angular/core';
import { CoindeltaClass } from '../../class/coindelta-class';
import { CoindeltaService } from '../../services/coindelta/coindelta.service';





@Component({
  selector: 'app-coindelta',
  templateUrl: './coindelta.component.html',
  styleUrls: ['./coindelta.component.css']
})
export class CoindeltaComponent implements OnInit {

  constructor(private coindeltaService: CoindeltaService) { }

  id;
  varCoindelta:CoindeltaClass;
  displayedColumns: string[] = [ 'MarketName' ,'Ask', 'Bid', 'Last'];


  ngOnInit() {
    this.showCoindelta();
    
    this.id= setInterval(a=>{
      this.showCoindelta();
    },30000,[]);
  
  }



  showCoindelta(){
    this.coindeltaService.getCoindelta().subscribe((data:CoindeltaClass)=>{
      console.log(data);
      
    //Observable.interval(3000).take(4).subscribe(() => this.timer());
    
   //   setTimeout(() => {
        this.varCoindelta=data;
        
    //  }, 2000);

      
      });
  }




}
