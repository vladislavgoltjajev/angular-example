import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CoreRoutingModule} from './core.routing.module';
import {RouterModule} from '@angular/router';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE
    })
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ],
  providers: []
})
export class CoreModule {
}
