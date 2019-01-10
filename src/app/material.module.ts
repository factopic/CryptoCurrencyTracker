import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatButtonModule,MatToolbarModule, MatMenuModule, MatIconModule ,MatSidenavModule} from '@angular/material';
import {  MatCardModule, MatTableModule} from '@angular/material';

const MATERIAL_MODULES = [
     
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule
    ];

@NgModule({
  imports: MATERIAL_MODULES,
   
    exports: MATERIAL_MODULES,
})


export class MaterialModule{}