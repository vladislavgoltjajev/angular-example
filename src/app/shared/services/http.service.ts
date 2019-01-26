import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import * as _ from 'lodash';
import {environment} from '../../../environments/environment';
import {NGXLogger} from 'ngx-logger';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient,
              private _logger: NGXLogger) {
  }

  get<T>(endpoint: string, queryParams?: object): Observable<T> {
    const requestType = 'GET';
    const url = this._getUrl(endpoint);
    this._logRequest(requestType, url, queryParams);
    return this._httpClient.get<T>(url, {
      params: this._getQueryParams(queryParams),
      headers: this._getHeaders(),
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<T>) => this._handleResponse(requestType, url, response)),
      catchError((error: HttpErrorResponse) => this._handleError(requestType, url, error))
    );
  }

  post<T>(endpoint: string, body: object): Observable<T> {
    const requestType = 'POST';
    const url = this._getUrl(endpoint);
    this._logRequest(requestType, url, null, body);
    return this._httpClient.post<T>(url, body, {
      headers: this._getHeaders(),
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<T>) => this._handleResponse(requestType, url, response)),
      catchError((error: HttpErrorResponse) => this._handleError(requestType, url, error))
    );
  }

  put<T>(endpoint: string, body: object): Observable<T> {
    const requestType = 'PUT';
    const url = this._getUrl(endpoint);
    this._logRequest(requestType, url, null, body);
    return this._httpClient.put<T>(url, body, {
      headers: this._getHeaders(),
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<T>) => this._handleResponse(requestType, url, response)),
      catchError((error: HttpErrorResponse) => this._handleError(requestType, url, error))
    );
  }

  delete<T>(endpoint: string, queryParams?: object): Observable<T> {
    const requestType = 'DELETE';
    const url = this._getUrl(endpoint);
    this._logRequest(requestType, url, queryParams);
    return this._httpClient.delete<T>(url, {
      params: this._getQueryParams(queryParams),
      headers: this._getHeaders(),
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<T>) => this._handleResponse(requestType, url, response)),
      catchError((error: HttpErrorResponse) => this._handleError(requestType, url, error))
    );
  }

  private _getUrl(endpoint: string): string {
    return environment.baseUrl + endpoint;
  }

  private _handleResponse<T>(requestType: string, url: string, response: HttpResponse<T>): T {
    const data: T = response.body || <T>{};
    this._logResponse<T>(requestType, url, data);
    return data;
  }

  private _handleError(requestType: string, url: string, errorResponse: HttpErrorResponse): Observable<never> {
    const errorMessage: string = errorResponse.message;
    this._logError(requestType, url, errorMessage);
    return throwError('error');
  }

  private _getQueryParams(inputParams: object): HttpParams {
    let params: HttpParams = new HttpParams();

    if (!_.isEmpty(inputParams)) {
      Object.keys(inputParams)
        .forEach((key: string) => {
          let value: any = inputParams[key];

          if (_.isNil(value)) {
            return;
          }

          if (_.isPlainObject(value)) {
            value = JSON.stringify(value);
          } else {
            value = value.toString();
          }

          params = params.append(key, value);
        });
    }

    return params;
  }

  private _getHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  private _logRequest(requestType: string, url: string, queryParams?: object, body?: object): void {
    const message = '\n' + requestType + ' request to ' + url + '\n';

    if (!_.isEmpty(queryParams)) {
      this._logger.info(message, queryParams);
    } else if (!_.isEmpty(body)) {
      this._logger.info(message, body);
    } else {
      this._logger.info(message);
    }
  }

  private _logResponse<T>(requestType: string, url: string, data: T): void {
    this._logger.info('\n' + requestType + ' response from ' + url + '\n', data);
  }

  private _logError(requestType: string, url: string, errorMessage: string): void {
    this._logger.error('\n' + requestType + ' error from ' + url + '\n', errorMessage);
  }
}
