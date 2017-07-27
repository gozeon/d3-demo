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
import { OnComponent } from './demos/on/on.component';
import { AddandremoveComponent } from './demos/addandremove/addandremove.component';
import { SortComponent } from './demos/sort/sort.component';
import { TooltipComponent } from './demos/tooltip/tooltip.component';
import { LineareachartComponent } from './demos/lineareachart/lineareachart.component';
import { SliderComponent } from './demos/slider/slider.component';
import { RadiosComponent } from './demos/radios/radios.component';
import { CombinationsComponent } from './demos/combinations/combinations.component';
import { EachComponent } from './demos/each/each.component';
import { PieComponent } from './demos/pie/pie.component';
import { DoughnutComponent } from './demos/doughnut/doughnut.component';
import { StackedbaranchoredComponent } from './demos/stackedbaranchored/stackedbaranchored.component';
import { StackedareaComponent } from './demos/stackedarea/stackedarea.component';
import { ForcedraggableComponent } from './demos/forcedraggable/forcedraggable.component';
import { PathComponent } from './demos/path/path.component';
import { PathprojectionComponent } from './demos/pathprojection/pathprojection.component';
import { PathscaledComponent } from './demos/pathscaled/pathscaled.component';
import { MapComponent } from './demos/map/map.component';

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
    AxisscatterplotdynamicComponent,
    OnComponent,
    AddandremoveComponent,
    SortComponent,
    TooltipComponent,
    LineareachartComponent,
    SliderComponent,
    RadiosComponent,
    CombinationsComponent,
    EachComponent,
    PieComponent,
    DoughnutComponent,
    StackedbaranchoredComponent,
    StackedareaComponent,
    ForcedraggableComponent,
    PathComponent,
    PathprojectionComponent,
    PathscaledComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
