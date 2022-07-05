import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const TXT_TYPE = 'text/plain/json;charset=utf-8';
const EXCEL_EXTENSION = '.xlsx';
const TXT_EXTENSION = '.txt';


@Injectable()
export class ExcelService {

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Your Holiday List :',
    useBom: false,
    noDownload: false,
    headers: []
  };

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string, skipHeader?: boolean): void {
    if(skipHeader){
      var worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json, {skipHeader:true});
    }else{
      var worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    }    
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });   
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public exportAsTxtFile(data: any, txtFileName: string): void {
    
    this.saveAsTxtFile(data, txtFileName);
  }

  private saveAsTxtFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: TXT_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + TXT_EXTENSION);
  }

  public exportAsCsvFile(json: any[], excelFileName: string, skipHeader?: boolean): void {
    if(!skipHeader){
      this.csvOptions.headers = Object.keys(json[0]);
    }
    new  AngularCsv(json, excelFileName + '_export_' + new Date().getTime(), this.csvOptions);

  }

}
