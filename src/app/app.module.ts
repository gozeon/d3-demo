import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemolistComponent } from './demolist/demolist.component';
import { DemodetailComponent } from './demodetail/demodetail.component';
import { PowerofdataroundedComponent } from './demos/powerofdatarounded/powerofdatarounded.component';
import { EditorComponent } from './common/editor/editor.component';
import { DrawingsvgscolorComponent } from './demos/drawingsvgscolor/drawingsvgscolor.component';
import { MakingbarchartComponent } from './demos/makingbarchart/makingbarchart.component';
import { ScatterplotComponent } from './demos/scatterplot/scatterplot.component';
import { ScaleComponent } from './demos/scale/scale.component';
import { AxisscatterplotComponent } from './demos/axisscatterplot/axisscatterplot.component';
import { AxistimeComponent } from './demos/axistime/axistime.component';
import { AxistimeformatComponent } from './demos/axistimeformat/axistimeformat.component';
import { TransitiondurationComponent } from './demos/transitionduration/transitionduration.component';
import { EasingComponent } from './demos/easing/easing.component';
import { DelaydynamicComponent } from './demos/delaydynamic/delaydynamic.component';
import { DelaydynamicrandomComponent } from './demos/delaydynamicrandom/delaydynamicrandom.component';
import { AxisscatterplotdynamicComponent } from './demos/axisscatterplotdynamic/axisscatterplotdynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DemolistComponent,
    DemodetailComponent,
    PowerofdataroundedComponent,
    EditorComponent,
    DrawingsvgscolorComponent,
    MakingbarchartComponent,
    ScatterplotComponent,
    ScaleComponent,
    AxisscatterplotComponent,
    AxistimeComponent,
    AxistimeformatComponent,
    TransitiondurationComponent,
    EasingComponent,
    DelaydynamicComponent,
    DelaydynamicrandomComponent,
    AxisscatterplotdynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
