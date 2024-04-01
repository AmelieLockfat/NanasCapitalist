import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigvalue',
  standalone: true
})
export class BigvaluePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let result: string = "";

    if (value < 1000)
      result = '$' + value.toFixed(2);
    else if (value < 1000000)
      result = '$' + value.toFixed(0);
    else if (value < 1000000000)
      result = '$' + Math.floor(value / 1000000) + " million";
    else
      result = '$' + Math.floor(value / 1000000000) + " billion";

    return result;
  }
}

