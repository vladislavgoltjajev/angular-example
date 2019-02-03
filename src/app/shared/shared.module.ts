import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './components/ui/input/input.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {ToastrModule} from 'ngx-toastr';
import {BackButtonComponent} from './components/ui/back-button/back-button.component';
import {environment} from '../../environments/environment';

@NgModule({
  declarations: [
    InputComponent,
    SpinnerComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.TRACE : NgxLoggerLevel.OFF
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 2000
    })
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    SpinnerComponent,
    BackButtonComponent
  ],
  providers: [HttpService]
})
export class SharedModule {
}
