import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, EMPTY, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import * as FileSaver from 'file-saver';
import { AppApiUrls, AppApiStatusCode } from './app.constants';
import { Router, Navigation } from '@angular/router';

@Injectable()
export class NetworkWAService {
  private backendApiURL = environment.backendApiURLWA;
  private authToken = 'a39be363-95a4-4ffd-87b4-37db1e792934';

  constructor(
    private http: HttpClient,
    private _commonService: CommonService,
    private router: Router
  ) { }

  commonParams(param: any) {
    let paramJson = param;
    paramJson.commonServiceRequest = {
      "channelId": 0,
      "clientTransactionId": "5243561253176",
      "countryId": "string",
      "deviceDetails": {
        "browserClient": "string",
        "deviceId": "string",
        "deviceIp": "string",
        "deviceName": "string",
        "latitude": "string",
        "location": "string",
        "longitude": "string"
      },
      "entityId": 0,
      "initiatorMsisdn": 0,
      "requestId": "string",
      "surroundSystem": 0,
      "timestamp": new Date().getTime()
    };
    paramJson.optionalInfo = {
      "info": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    };
    return paramJson;
  }
  // get(url: any): Observable<HttpResponse<any>> {
  //   console.log('url:  ' + this.backendApiURL + url);
  //   return this.http.get<HttpResponse<any>>(
  //     this.backendApiURL + url,
  //     {
  //       headers: {
  //         "Authorization": 'Bearer ' + this._commonService.authInfo().token
  //       }
  //     }
  //   );
  // };

  get(url: any): Observable<HttpResponse<any>> {
    console.log('url:  ' + this.backendApiURL + url);
    return this.http.get<HttpResponse<any>>(
      this.backendApiURL + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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

  getOuterURL(url: any): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      url,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'responseType': 'text'
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
  getWithQueryParams(url: any, params: any): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.backendApiURL + url,
      {
        params: params,
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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
  getWithoutAuth(url: any, param?: any): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.backendApiURL + url,
      {
        params: param
      }
    );
  }

  getStaticData(url: any): Observable<HttpResponse<any>> {
    console.log('Received URL:     ' + url);
    return this.http.get<HttpResponse<any>>(
      url
    );
  }

  async getContentLength(url: any): Promise<any> {
    console.log('Received URL:     ' + url);
    return await this.http.get(url, {
      responseType: 'arraybuffer'
    }
    ).toPromise();
  }



  downloadFile(url: any): void {
    console.log(this.backendApiURL + url);
    window.location.href = this.backendApiURL + url;
  }

  downloadFileWithHeaders(url): void {
    console.log('url  ' + this.backendApiURL + url);
    console.log('url  ' + this._commonService.authInfo().token);
    const res: any = this.http.get(
      this.backendApiURL + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
        }, responseType: 'blob' as 'json'
      }
    );
    // console.log('ddd ' + JSON.stringify(res));

    const downloadURL = window.URL.createObjectURL(new Blob([res], { type: 'application/octet-stream' }));
    console.log(downloadURL);
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'help1.txt';
    link.click();
    // window.open('http://digiconnect.spicedigital.in/omni-user-management/api/v1/manageSenderID/downloadFile?filePath=' + res, '_blank');
  }

  downloadZipFile(url) {
    return this.http.get(
      this.backendApiURL + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
        }, responseType: 'arraybuffer'
      }
    );
    // console.log('ddd ' + JSON.stringify(res));

    // const downloadURL = window.URL.createObjectURL(new Blob([res], { type: 'text/plain' }));
    // console.log(downloadURL);
    // const link = document.createElement('a');
    // link.href = downloadURL;
    // link.download = 'help1.txt';
    // link.click();
    // window.open('http://digiconnect.spicedigital.in/omni-user-management/api/v1/manageSenderID/downloadFile?filePath=' + res, '_blank');
  }

  downloadTextFile(url): any {
    return this.http.get(
      this.backendApiURL + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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


  post(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    if (!param) {
      param = {};
    }
    let cso: any = {
      "channelId": 0,
      "clientTransactionId": "",
      "countryId": "",
      "deviceDetails": {
        "browserClient": "",
        "deviceId": "",
        "deviceIp": "",
        "deviceName": "",
        "latitude": "",
        "location": "",
        "longitude": ""
      },
      "entityId": 0,
      "initiatorMsisdn": 0,
      "requestId": "",
      "surroundSystem": 0,
      "timestamp": 0
    };
    let oi: any = {
      "info": []
    };
    param['commonServiceRequest'] = cso;
    param['optionalInfo'] = oi;
    return this.http.post(
      this.backendApiURL + url,
      param,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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

  postWithoutData(url: any, param?: any, head?: any, auth?: any): Observable<any> {

    return this.http.post(
      this.backendApiURL + url,
      param,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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

  postFile(url: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .post(this.backendApiURL + url, formData);
  }


  postWithFile(url: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .post(this.backendApiURL + url, formData,
        {
          headers: {
            "Authorization": 'Bearer ' + this._commonService.authInfo().token
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

  postFormData(url: any, formData: any): Observable<any> {
    let cso: any = {
      "channelId": 0,
      "clientTransactionId": "",
      "countryId": "",
      "deviceDetails": {
        "browserClient": "",
        "deviceId": "",
        "deviceIp": "",
        "deviceName": "",
        "latitude": "",
        "location": "",
        "longitude": ""
      },
      "entityId": 0,
      "initiatorMsisdn": 0,
      "requestId": "",
      "surroundSystem": 0,
      "timestamp": 0
    };
    let oi: any = {
      "info": []
    };
    // formData.append('commonServiceRequest', cso);
    // formData.append('optionalInfo', oi);
    // param['commonServiceRequest'] = cso;
    // param['optionalInfo'] = oi;
    return this.http
      .post(this.backendApiURL + url, formData,
        {
          headers: {
            "Authorization": 'Bearer ' + this._commonService.authInfo().token
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

  putFormData(url: any, formData: any): Observable<any> {
    return this.http
      .put(this.backendApiURL + url, formData,
        {
          headers: {
            "Authorization": 'Bearer ' + this._commonService.authInfo().token
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



  postRegistration(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    if (!param) {
      param = {};
    }
    let cso: any = {
      "channelId": 0,
      "clientTransactionId": "",
      "countryId": "",
      "deviceDetails": {
        "browserClient": "",
        "deviceId": "",
        "deviceIp": "",
        "deviceName": "",
        "latitude": "",
        "location": "",
        "longitude": ""
      },
      "entityId": 0,
      "initiatorMsisdn": 0,
      "requestId": "",
      "surroundSystem": 0,
      "timestamp": 0
    };
    param['commonServiceRequest'] = cso;
    return this.http.post(
      this.backendApiURL + url,
      param
    );
  }

  posttemp(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    let postParams = {
      "name": "morpheus",
      "job": "leader"
    };
    return this.http.post(
      'https://reqres.in/api/users',
      postParams
    );
  };

  postWithoutCSO(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.post(
      this.backendApiURL + url,
      param,
      {
        headers: head
      }
    );
  }

  postWithUrlAuth(url: string): Observable<any> {
    return this.http.post(
      this.backendApiURL + url,
      null,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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
  postWithUrl(url: string): Observable<any> {
    return this.http.post(
      this.backendApiURL + url
      , null
    );
  };

  postProfileApis(theUrl: string, params: any, skipOi?: boolean) {
    params["commonServiceRequest"] = {
      "clientTransactionId": "string",
      "deviceDetails": {
        "browserClient": "string",
        "deviceId": "string",
        "deviceIp": "string",
        "deviceName": "string",
        "latitude": "string",
        "location": "string",
        "longitude": "string"
      },
      "requestId": "string",
      "timestamp": 0
    };
    if (!skipOi) {
      params["optionalInfo"] = {
        "info": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      };
    }
    return this.http.post(
      this.backendApiURL + theUrl,
      params,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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



  // getAzureAuthToken(): Observable<any> {
  //   return this.http.post(
  //     `${AppApiUrls.AZURE_AUTH_URL}`, {},
  //     {
  //       headers: {
  //         "Ocp-Apim-Subscription-Key": "a826bf31cff74e488ca8e36de0a0526c"
  //       }, responseType: 'text'
  //     }
  //   ).map(res => res)
  //   .catch(err => err);
  // };

  // postTextToSpeech(authToken, reqText) {
  //   let body = "<speak version='1.0' xml:lang='"+reqText.language+"'><voice xml:lang='"+reqText.language+"' xml:gender='"+reqText.gender+"' name='"+reqText.name+"'>"+reqText.text+"</voice></speak>"
  //   return this.http.post(
  //     `${AppApiUrls.AZURE_TEXT_TO_SPEECH}`,
  //     body,
  //     {
  //       headers: {
  //         'Authorization': 'Bearer ' + authToken,
  //           'cache-control': 'no-cache',
  //           'X-Microsoft-OutputFormat': 'riff-8khz-16bit-mono-pcm',
  //           'Content-Type': 'application/ssml+xml'
  //       }, responseType: 'blob' as 'json'
  //     }
  //   ).map(res => new Blob([<any>res], { type: 'audio/wav' }))
  //   .catch(err => err);

  // };

  put(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.put(
      this.backendApiURL + url,
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

  putWithAuth(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.put(
      this.backendApiURL + url,
      param,
      {
        headers: {
          'Authorization': this._commonService.authInfo().token
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

  delete(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.delete(
      this.backendApiURL + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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

  deleteWithAuth(url: any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.delete(
      this.backendApiURL + url,
      {
        headers: {
          "Authorization": 'Bearer ' + this._commonService.authInfo().token
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



uploadFile(url: any, param?: any): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', param);
  
    return this.http.post(
      this.backendApiURL + url,
      param,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this._commonService.authInfo().token,
         })
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
}



const fileUploadHeaders = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  "Process-Data": false
};
