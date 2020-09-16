import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PungerPageRoutingModule } from './punger-routing.module';
import { PungerPage } from './punger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PungerPageRoutingModule
  ],
  declarations: [PungerPage]
})
export class PungerPageModule {}
