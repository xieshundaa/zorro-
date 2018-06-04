import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../common/shared/shared.module';

import { NavSiderComponent } from './nav-sider/nav-sider.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    WorkspaceRoutingModule
  ],
  declarations: [
    WorkspaceComponent,
    NavSiderComponent,
    TopHeaderComponent,
    FooterComponent
  ]
})
export class WorkspaceModule {
}
