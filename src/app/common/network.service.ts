import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable, EMPTY, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import * as FileSaver from 'file-saver';
import { AppApiUrls, AppApiStatusCode } from './app.constants';
import { Router, Navigation } from '@angular/router';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NetworkService {
  private backendApiURL = environment.backendApiURL;
  private backendTWOFAApiURL = environment.backendApiURLTwoFA;
  private authToken = 'a39be363-95a4-4ffd-87b4-37db1e792934';

  constructor(
    private http: HttpClient,
    private _commonService: CommonService,
    private router: Router
  ) { }


  get(url: any, version?: any): Observable<HttpResponse<any>> {
    console.log('url:  ' + this.backendApiURL + url);
    return this.http.get<HttpResponse<any>>(
      this.backendApiURL + (version || AppApiUrls.VERSION_1) + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  };

  getWithQueryParams(url: any, params: any, version?: any): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.backendApiURL + (version || AppApiUrls.VERSION_1) + url,
      {
        params: params,
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  };

  getWithoutAuth(url: any, param?: any, version?: any): Observable<HttpResponse<any>> {
    const ver = (version || AppApiUrls.VERSION_1);
    return this.http.get<HttpResponse<any>>(
      this.backendApiURL + ver + url,
      {
        params: param,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }

  getStaticData(url: any): Observable<HttpResponse<any>> {
    console.log('Received URL:     ' + url);
    return this.http.get<HttpResponse<any>>(
      url,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }

  async getContentLength(url: any): Promise<any> {
    return await this.http.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    ).toPromise();
  }



  downloadFile(url: any, version?: any): void {
    window.location.href = this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url;
  }

  downloadFileWithHeaders(url, version?: any): void {
    const res: any = this.http.get(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }, responseType: 'blob' as 'json'
      }
    );

    const downloadURL = window.URL.createObjectURL(new Blob([res], { type: 'application/octet-stream' }));
    console.log(downloadURL);
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'help1.txt';
    link.click();
  }

  downloadZipFile(url, version?: any) {
    return this.http.get(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }, responseType: 'arraybuffer'
      }
    );
  }

  downloadTextFile(url, version?: any): any {
    return this.http.get(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  }

  saveDownloadedFile(data: any, type: string): void {
    const downloadURL = window.URL.createObjectURL(new Blob([data], { type: type }));
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'help.txt';
    link.click();
  }


  post(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    if (!param) {
      param = {};
    }

    return this.http.post(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  };

  postWithoutData(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {

    return this.http.post(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  };

  postWithoutDataTwoFA(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {

    return this.http.post(
      this.backendTWOFAApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
        return res;
    });
  };

  postFile(url: any, file: File, version?: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .post(this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url, formData,
        {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        });
  }


  postWithFile(url: any, file: File, version?: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .post(this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url, formData,
        {
          headers: {
            "Authorization": 'Bearer ' + this._commonService.authInfo().token,
            'Access-Control-Allow-Origin': '*'
          }
        }).map(res => {
          if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
            this.performLogout()
          }
          else {
            return res;
          }
          
        });
  }

  postFormData(url: any, formData: any, version?: any): Observable<any> {      
    return this.http
      .post(this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url, formData,
        {
          headers: {
            "Authorization": 'Bearer ' + this._commonService.authInfo().token,
            'Access-Control-Allow-Origin': '*'
          }
        }).map(res => {
          if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
            this.performLogout()
          }
          else {
            return res;
          }
          
        });
  }

  postFormDataTwoFA(url: any, formData: any, version?: any): Observable<any> {
    return this.http
      .post(this.backendTWOFAApiURL + (version || AppApiUrls.VERSION_1)  + url, formData,
        {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }).map(res => {
            return res;
        });
  }


  putFormData(url: any, formData: any, version?: any): Observable<any> {
    return this.http
      .put(this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url, formData,
        {
          headers: {
            "Authorization": 'Bearer ' + this._commonService.authInfo().token,
            'Access-Control-Allow-Origin': '*'
          }
        }).map(res => {
          if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
            this.performLogout()
          }
          else {
            return res;
          }
          
        });
  }



  postRegistration(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    if (!param) {
      param = {};
    }
    return this.http.post(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param
    );
  }

  posttemp(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    let postParams = {
      "name": "morpheus",
      "job": "leader"
    };
    return this.http.post(
      'https://reqres.in/api/users',
      postParams
    );
  };

  postWithoutCSO(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    return this.http.post(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param,
      {
        headers: head
      }
    );
  }

  postWithUrlAuth(url: string, version?: any): Observable<any> {
    return this.http.post(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      null,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  };
  postWithUrl(url: string, version?: any): Observable<any> {
    return this.http.post(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url
      , null
    );
  };

  put(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    return this.http.put(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  }

  putWithAuth(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    return this.http.put(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      param,
      {
        headers: {
          'Authorization': this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  }

  delete(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    return this.http.delete(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        },
        params: param ? param : {}
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  }

  deleteWithAuth(url: any, param?: any, head?: any, auth?: any, version?: any): Observable<any> {
    return this.http.delete(
      this.backendApiURL + (version || AppApiUrls.VERSION_1)  + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).map(res => {
      if (res['result'].userMsg && res['result'].userMsg.indexOf('Unauthorized') != -1){
        this.performLogout()
      }
      else {
        return res;
      }
      
    });
  }

  performLogout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}



const fileUploadHeaders = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  "Process-Data": false
};