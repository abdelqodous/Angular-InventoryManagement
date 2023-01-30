import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

// Epochs
const epochs: any = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
];

@Pipe({
  name: 'relativeDatePipe'
})
export class RelativeDatePipePipe implements PipeTransform {

  transform(value: Date) {
    var datePipe = new DatePipe("en-US");
    return datePipe.transform(value.toString(), 'dd/MM/yyyy');
    // return value;
  }


  /*getDuration(timeAgoInSeconds: number) {
    for (let [name, seconds] of epochs) {
      let interval = Math.floor(timeAgoInSeconds / seconds);

      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name
        };
      }
    }
    return {
      interval: 0,
      epoch: 'seconds'
    };
  };*/

}
