import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShapeCanvasComponent } from './shape-canvas/shape-canvas.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RectangleFormComponent } from './sidebar/rectangle-form/rectangle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrueStatusComponent } from './true-status/true-status.component';
import { FalseStatusComponent } from './false-status/false-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeCanvasComponent,
    HeaderComponent,
    SidebarComponent,
    RectangleFormComponent,
    TrueStatusComponent,
    FalseStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
