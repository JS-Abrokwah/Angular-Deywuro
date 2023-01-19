import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { BulkSmsComponent } from './components/sms/bulk-sms/bulk-sms.component';
import { GroupSmsComponent } from './components/sms/group-sms/group-sms.component';
import { SingleSmsComponent } from './components/sms/single-sms/single-sms.component';
import { SmsDashboardComponent } from './components/sms/sms-dashboard/sms-dashboard.component';
import { SmsComponent } from './components/sms/sms.component';

const clientAppRoutes: Routes = [
  {
    path: 'deywuro/welcome',
    component: ClientHomeComponent,
  },
  { path: 'sms', component: SmsComponent,children:[
    {path:'dashboard',component:SmsDashboardComponent},
    {path:'single-sms',component:SingleSmsComponent},
    {path:'bulk-sms',component:BulkSmsComponent},
    {path:'group-sms',component:GroupSmsComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(clientAppRoutes)],
  exports: [RouterModule],
})
export class ClientappRoutingModule {}
