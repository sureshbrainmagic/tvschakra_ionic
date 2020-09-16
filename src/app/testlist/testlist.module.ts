import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestlistPageRoutingModule } from './testlist-routing.module';
import { TestlistPage } from './testlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TestlistPageRoutingModule
  ],
  declarations: [TestlistPage]
})
export class TestlistPageModule {}
