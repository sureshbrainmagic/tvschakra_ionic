import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InlfateddimensionPageRoutingModule } from './inlfateddimension-routing.module';
import { InlfateddimensionPage } from './inlfateddimension.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InlfateddimensionPageRoutingModule
  ],
  declarations: [InlfateddimensionPage]
})
export class InlfateddimensionPageModule {}
