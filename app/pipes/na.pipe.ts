import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    debugger;
    if(value == '' || value == null || value == undefined){
      return "NA"
    } else{
      return value;
    }
    // return null;
  }

}
