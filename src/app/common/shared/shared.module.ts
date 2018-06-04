import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViserModule } from 'viser-ng';
import { NgxEchartsModule } from 'ngx-echarts';


import { LoginService } from '../service/login/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import { DashboardService } from '../service/dashboard/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ViserModule,
    NgxEchartsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ViserModule
  ],
  providers: [
    LoginService,
    NzMessageService,
    DashboardService
  ]
})
export class SharedModule {
}
