import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritionPageRoutingModule } from './nutrition-routing.module';

import { NutritionPage } from './nutrition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionPageRoutingModule,
    TranslateModule
  ],
  declarations: [NutritionPage]
})
export class NutritionPageModule {}
