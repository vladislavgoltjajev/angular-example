import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerModule} from 'ngx-logger';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './components/form/input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoggerModule.forChild()
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    InputComponent
  ],
  providers: [HttpService]
})
export class SharedModule {
}
