import { changeOrderStatus, FoodType, OrderStatus, ShiftType } from ".";

export class CalendarDate {
  current!: string;
  fromDate!: any;
  toDate!: any;
  listUnix!: any[];
}
export class closingDate {
  date!: any;
  event!: string;
  isHoliday!: boolean;
  shiftType!: ShiftType;
}
export class orderAutomaticModel {
  foodId!: number;
  orderDate!: string;

}



export class myOrderWeekly {
  orderId!: number;
  invoiceId!: number;
  totalPrice!: number;
  otherPrice!: number;
  subsid!: number;
  fromSalary!: number;
  rate!: number;
  status!: number;
  orderDate!: string;
  commentId!: number;
  foods!: Array<foodModel>
}

export class OrderWeekly {
  isHoliday!: boolean;
  shiftType!: ShiftType;
  isSelect: boolean = false;
  Date!: string;
  foods: Array<foodModel> = new Array<foodModel>();
  event!: string;
  MainFood!: string | undefined;
  DessertName?: string;
  DrinksName?: string;
  totalPrice!: number;
  invoiceId?: number | null;
  orderDate?: string;
  orderId?: number;
  isRemove?: boolean;
  restaurantName?: string;
  restaurantLogo?: string;
  restaurantId?: number
  status ?: changeOrderStatus;
  isChange!: boolean;
  otherPrice!: number;
  subsid!: number;
  fromSalary!: number;
  rate!: number;
  myPayment?: number = 0;
  isCurentDate!: boolean;
}


export class foodModel {

  orderFoodId!: number;
  orderId!: number;
  restaurantId!: number;
  restaurantName!: string;
  restaurantLogo!: string;
  foodId!: number;
  foodName!: string;
  foodType!: FoodType;
  price!: number;
  orderDate!: string;
  isShow?: boolean = true;
  category?: string;
  name!: string;
  rate!: number;
  image!: string;
}


export class adminMonthlyTotalReportModel{
  orderDate!: string;
  sumPrice!: number;
  isCurentDate!: boolean;
  isHoliday!: boolean;
  sumPriceWeek?: number;
}
export class adminDailyReportByPositionModel{
  position!: string;
  foodId!: number;
  foodName!: string;
  foodCount!: number;
  usersDisplayName!: string;
  sumPrice!: number;
}
export class foodFilter {
  selectFoodType!: string
  minPrice: Array<number> = [25000,45000,60000, 75000];
  priceSelect!: number;
}
