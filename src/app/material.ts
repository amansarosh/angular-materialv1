import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';

@NgModule({
  imports: [MatInputModule,MatButtonModule, MatProgressSpinnerModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatTooltipModule, MatRadioModule],
  exports: [MatInputModule,MatButtonModule, MatProgressSpinnerModule, MatTabsModule, MatCheckboxModule, MatToolbarModule,MatSliderModule, MatSlideToggleModule, MatMenuModule, MatTooltipModule, MatRadioModule],
})
export class MaterialModule { }