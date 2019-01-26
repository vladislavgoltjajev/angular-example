import {Component, OnInit} from '@angular/core';
import {NGXLogger, NgxLoggerLevel} from 'ngx-logger';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _logger: NGXLogger) {
  }

  ngOnInit(): void {
    if (environment.production) {
      this._logger.updateConfig({
        level: NgxLoggerLevel.OFF
      });
    }
  }
}
