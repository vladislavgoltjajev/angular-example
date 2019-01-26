import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/navigation/header/header.component';
import {FooterComponent} from './components/navigation/footer/footer.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CoreRoutingModule} from './core.routing.module';
import {RouterModule} from '@angular/router';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule {
}
