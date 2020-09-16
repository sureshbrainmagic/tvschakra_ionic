import { SubheaderComponent } from './subheader/subheader.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
    SubheaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    SubheaderComponent
  ]
})
export class ComponentsModule { }
