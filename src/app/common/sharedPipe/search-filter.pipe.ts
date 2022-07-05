import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
 // pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(arr: any, value: any, searchField:any): any {
   
    if (! arr ||  !value){
      return arr;
    }else if(searchField==undefined){
      return arr.filter(obj =>{
        return String(obj).toLowerCase().includes(value.toLowerCase());
      });
    }else{
      return arr.filter(obj =>{
        return obj[searchField].toString().toLowerCase().includes(value.toLowerCase());
      });
    }
  }
}
