import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '../material-module/material-module.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabRendererComponent } from './components/tab-renderer/tab-renderer.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    HomepageComponent,
    DashboardComponent,
    TabRendererComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class SharedFeaturesModule { }
