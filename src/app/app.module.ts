import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemolistComponent } from './demolist/demolist.component';
import { DemodetailComponent } from './demodetail/demodetail.component';
import { PowerofdataroundedComponent } from './powerofdatarounded/powerofdatarounded.component';
import { EditorComponent } from './editor/editor.component';
import { DrawingsvgscolorComponent } from './drawingsvgscolor/drawingsvgscolor.component';
import { MakingbarchartComponent } from './makingbarchart/makingbarchart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DemolistComponent,
    DemodetailComponent,
    PowerofdataroundedComponent,
    EditorComponent,
    DrawingsvgscolorComponent,
    MakingbarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
