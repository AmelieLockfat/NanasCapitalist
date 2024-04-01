import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigvalue',
  standalone: true
})
export class BigvaluePipe implements PipeTransform {

  transform(value: number, args?: any): string  {
    let result: string = "";

    if (value < 1000)
      result = '$' + value.toFixed(2);
    else if (value < 1000000)
      result = '$' + value.toFixed(0);
    else if (value < 1000000000)
      result = '$' + (value / 1000000).toFixed(2) + " million";
    else if (value >= 1000000000)
      result = '$' + (value / 1000000000).toFixed(2) + " billion";

      return result;  }
}

