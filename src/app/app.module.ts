import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
