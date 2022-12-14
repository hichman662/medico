import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicationPageRoutingModule } from './communication-routing.module';

import { CommunicationPage } from './communication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunicationPageRoutingModule,
    TranslateModule
  ],
  declarations: [CommunicationPage]
})
export class CommunicationPageModule {}
