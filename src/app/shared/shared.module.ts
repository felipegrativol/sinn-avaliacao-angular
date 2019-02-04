import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentBoxComponent } from './content-box/content-box.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    ContentBoxComponent
  ],
  declarations: [ContentBoxComponent, PageNotFoundComponent]
})
export class SharedModule {}
