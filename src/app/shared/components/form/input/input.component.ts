import {Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as _ from 'lodash';
import {isRequired} from '../../../utility/form-utils';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formControl: FormControl = new FormControl();
  @Input() errorMessages: object = {};
  @Input() labelSize: number = 2;
  @Input() inputSize: number = 0;
  @Input() readOnly: boolean = false;
  @Input() value: any;
  @ViewChild('inputElement') private _inputElement: ElementRef;

  id: string;
  required: boolean;

  constructor(private _renderer: Renderer2) {
    this.id = Math.random().toString(36).slice(2);
  }

  ngOnInit(): void {
    this.required = isRequired(this.formControl);
  }

  onChange(event: any): void {
    this._onChange(event.target.value);
  }

  onKeyup(event: any): void {
    this._onChange(event.target.value);
  }

  onBlur(event: any): void {
    this._onTouched();
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  private _onChange = (val: any): void => {
  };

  private _onTouched = (): void => {
  };

  showError(): boolean {
    return !this.formControl.valid && (this.formControl.dirty || this.formControl.touched);
  }

  hasDefinedErrorMessages(): boolean {
    return !_.isEmpty(this.errorMessages);
  }

  getErrorMessage(): string {
    const foundErrorKey: string = Object.keys(this.errorMessages)
      .find((errorKey: string) => this.formControl.hasError(errorKey));

    if (foundErrorKey) {
      return this.errorMessages[foundErrorKey];
    }

    return '';
  }
}
