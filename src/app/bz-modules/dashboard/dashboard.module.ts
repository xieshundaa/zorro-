import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { NgxEchartsModule } from 'ngx-echarts';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../../common/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // NgxEchartsModule,
    NgZorroAntdModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
