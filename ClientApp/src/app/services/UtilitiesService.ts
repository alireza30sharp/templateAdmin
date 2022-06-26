import { Injectable } from '@angular/core';
import * as moment from 'jalali-moment';
import { Observable, Observer } from 'rxjs';
import * as _mls from "@models/index";
@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  /**
 * انتقال به تکست باکس بعدی بعد از وارد کردن مقدار
 * @param element
 */
  public onFocusElement(element: any): void {
    setTimeout(() => {
      element.focus();
    }, 1);
  }

  /**
   * convert Base64 to Blob
   * @param base64Image
   */
  public convertBase64ToBlob(base64Image: string) {
    // Split into two parts
    const parts = base64Image.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }

  // convert base64 to file
  public convertBase64ToFile(base64: string, fileName: string = "test"): File {
    const blob = this.convertBase64ToBlob(base64);
    return new File([blob], fileName, { type: 'image/png' });
  }

  // check guid is valid regex
  public isValidGuid(guid: string): boolean {
    var result = guid.match("^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$") as any;
    return result.length > 0;
  }




  /**
 * این متد نسبت به روز جاری تعداد روز تولید میکند
 * تعداد روز تولیدی
 * @param day
 */
  genareteWeekDay(day: number = 14): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
 
        const arrDate: any[] = [];
      let ModelDate: _mls.CalendarDate = new _mls.CalendarDate();
      let date = new Date().toISOString();
      let cu = moment.from(date, "en", "YYYY-MM-DDTHH:mm:ss");
        let first = cu.startOf('jweek' as any).locale('en');
        for (var i = 0; i < day; i++) {
          arrDate.push(first.clone().add(i, "days").format("YYYY-MM-DDTHH:mm:ss"));

        }
        ModelDate = {
          current: date,
          fromDate: arrDate[0],
          toDate: arrDate[arrDate.length - 1],
          listUnix: arrDate
      }
      observer.next(ModelDate);
      })





  }



}
