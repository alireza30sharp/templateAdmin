import { ɵassignExtraOptionsToRouter } from "@angular/router";

export interface Response<T> {
  message: string;
  statusCode: number;
  data: T;
}


export interface ResponseApi<T> {
  message: string;
  statusCode: number;
  data: {
    records: T,
    totalCount: number;
  }
}

export enum orderDetailsType {
  new = 0,
  Edited,
  Removed,
  Empty

}
export enum changeOrderStatus {
  /// <summary>
  /// ثبت غذا جدید
  /// </summary>
  new = 0,
  /// <summary>
  /// ویرایش
  /// </summary>
  edite = 1,
  /// <summary>
  /// حذف شده
  /// </summary>
  delete = 2,
  //defulte
  defulte = -1
}
export interface ResponseType<T> {
  message: string;
  statusCode: number;
  data: Records<T>;
  totalCount: number;
}

export interface Records<TR> {
  records: TR,
  totalCount: number;

}
export class FilterRequest {
  filters?: string;
  sorts?: string;
  page: number = 1;
  pageSize: number = 10;
  fromDate?: string;
  toDate?: string;
}



//وضعیت تیکت ها
export enum TicketStatus {
  /// <summary>
  /// در دست بررسی
  /// </summary>
  Pending = 0,
  /// <summary>
  /// مشاهده شده
  /// </summary>
  Seen = 1,
  /// <summary>
  /// پاسخ داده شده
  /// </summary>
  Replyed = 2
}

export enum TicketStatusLabel {
  /// <summary>
  /// در دست بررسی
  /// </summary>
  Pending = "در دست بررسی",
  /// <summary>
  /// مشاهده شده
  /// </summary>
  Seen = "مشاهده شده",
  /// <summary>
  /// پاسخ داده شده
  /// </summary>
  Replyed = "پاسخ داده شده"
}





export enum transactionType {
  /// <summary>
  /// Invalid value
  /// </summary>
  None = 0,
  /// <summary>
  /// واریز
  /// </summary>
  Deposit = 1,
  /// <summary>
  /// برداشت
  /// </summary>
  Withdrawal = 2,
  /// <summary>
  /// کارمزد
  /// </summary>
  Fee = 3
}
export enum transactionTypeLbl {
  /// <summary>
  /// Invalid value
  /// </summary>
  None = "نا معتبر",
  /// <summary>
  /// واریز
  /// </summary>
  Deposit = "واریز",
  /// <summary>
  /// برداشت
  /// </summary>
  Withdrawal = "برداشت",
  /// <summary>
  /// کارمزد
  /// </summary>
  Fee = "کارمزد"
}

export enum transactionMethod {
  None = 0,
  /// <summary>
  /// شارژ
  /// </summary>
  Charge = 10,
  /// <summary>
  /// 
  /// </summary>
  Decharge = 20,
  /// <summary>
  /// انتقال
  /// </summary>
  Transfer = 30,
  /// <summary>
  /// پرداخت
  /// </summary>
  Payment = 40,
  /// <summary>
  /// برگشت
  /// </summary>
  Return = 50
}


export enum ShiftType {
  /// <summary>
  /// شیفت کاری-روز عادی
  /// </summary>
  ShiftWork = 1,
  /// <summary>
  /// غیر شیفت -پنجشنبه
  /// </summary>
  NonShift = 2,
  /// <summary>
  /// شیفت فوق العاده-تعطیل رسمی
  /// </summary>
  SuperShift = 3
}



export enum OrderStatus {
  /// <summary>
  /// در حال انتظار
  /// </summary>
  Pending = 0,
  /// <summary>
  /// پرداخت شده
  /// </summary>
  Paied = 1,
  /// <summary>
  /// کنسل شده
  /// </summary>
  Canceled = 2,
  /// <summary>
  /// ثبت شده توسط رزرو اتوماتیک
  /// </summary>
  AutomaticReserve = 3
}
