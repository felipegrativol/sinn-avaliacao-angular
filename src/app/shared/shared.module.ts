import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ContentBoxComponent } from './content-box/content-box.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  imports: [FlexLayoutModule, MaterialModule, FormsModule, AppRoutingModule],
  exports: [FlexLayoutModule, MaterialModule, FormsModule, ContentBoxComponent],
  declarations: [ContentBoxComponent, PageNotFoundComponent]
})
export class SharedModule {}
