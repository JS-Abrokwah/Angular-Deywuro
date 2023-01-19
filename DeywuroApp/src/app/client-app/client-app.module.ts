import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { MaterialModule } from '../material-module/material-module.module';
import { HomepageComponent } from '../shared-features/homepage.component';
import { ClientappRoutingModule } from './clientapp-routing.module';
import { SmsComponent } from './components/sms/sms.component';
import { DashboardComponent } from '../shared-features/components/dashboard/dashboard.component';
import { SmsDashboardComponent } from './components/sms/sms-dashboard/sms-dashboard.component';
import { SingleSmsComponent } from './components/sms/single-sms/single-sms.component';
import { TabRendererComponent } from '../shared-features/components/tab-renderer/tab-renderer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BulkSmsComponent } from './components/sms/bulk-sms/bulk-sms.component';
import { GroupSmsComponent } from './components/sms/group-sms/group-sms.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [
    ClientHomeComponent,
    HomepageComponent,
    DashboardComponent,
    SmsComponent,
    SmsDashboardComponent,
    SingleSmsComponent,
    TabRendererComponent,
    BulkSmsComponent,
    GroupSmsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClientappRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ]
})
export class ClientAppModule { }
