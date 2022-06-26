export interface ResponseApi {
  statusCode: number;
  message: string;
  data: any;
}

export enum TransformType {
  Charging  = 1,
  Discharging = 2,
  Transform = 3,
  Payment = 4
}

export class FilterRequest {
  filters?: string;
  sorts?: string ;
  page: number = 1;
  pageSize: number = 500;
}


export enum ScanType {
  Undifined = null,
  PaymentPhaseOne = 1,
  paymentPhaseTow = 2,
  Authentication = 3,
  ShopScan = 4,
  Discharging = 5,
  Charging = 6,
  CartDetails = 7
}

