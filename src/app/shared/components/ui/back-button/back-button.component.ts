import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  @Input() additionalClass: string = '';
  @Input() disabled: boolean = false;

  constructor(private _location: Location) {
  }

  goBack(): void {
    this._location.back();
  }
}
