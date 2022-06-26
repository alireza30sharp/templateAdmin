import { transactionMethod, transactionType } from "./global-model";


export class TransactionsModel {
  id?: number;
  beneficiaryName?: string;
  refNumber?: number;
  amount?: number;
  rate?: number;
  balance?: number
  transactionType?: transactionType;
  transactionMethod?: transactionMethod;
  transactionDate?: string;
  description?: string;
  invoiceId?: number;
}
export class transferAmountModel {
  destUserId!: number;
  amount?: number;
  password?: string;
  
}


export class chargesModel {
  bankReceipetNumber?: number;
  amount?: number;
}

export interface UserWalletsParams {
  id: number;
  filters: string;
  sorts: string;
  page: number;
  pageSize: number;
  fromDate: string;
  toDate: string;
}

export interface UserWallets {
  id: number;
  beneficiaryName: string;
  refNumber:number;
  amount:number;
  rate:number;
  balance:number;
  invoiceId:number;
  transactionMethod:number;
  transactionType:number;
  transactionDate: string;
  description: string;
}


