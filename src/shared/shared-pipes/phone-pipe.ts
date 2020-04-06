import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phone: string) {
    if (!phone) {
      return;
    }
    if (phone.length === 10) {
      const str = '(' + phone.substring(0, 2) + ')' + phone.substring(3, 5)  + '-' + phone.substring(6, 9);
      return str;
    } else if (phone.length === 11) {
      const str = phone.substring(0) + '(' + phone.substring(1, 3) + ')' + phone.substring(4, 6)  + '-' + phone.substring(7, 10);
      return str;
    }
    // phone = phone.charAt(0) != 0 ? '0' + phone : '' + phone;

    // let newStr = "";
    // let i = 0;

    // for (; i < Math.floor(phone.length / 2) - 1; i++) {
    //   newStr = newStr + phone.substr(i * 2, 2) + '-';
    // }

    // return newStr + phone.substr(i * 2);
  }
}
