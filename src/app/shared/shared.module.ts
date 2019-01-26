import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerModule} from 'ngx-logger';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoggerModule.forChild()
  ],
  providers: [HttpService]
})
export class SharedModule {
}
