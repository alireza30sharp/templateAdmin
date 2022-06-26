import { OrderStatus } from ".";

export class InsertRestaurantModel {

  restaurantId?: number;
  name?: string;
  address?: string;
  phoneNumber?: string;
  logo?: string;
  isActive?: boolean;

}



export class InsertFoodModel {
  foodId!: number;
  restaurantId!: number;
  name!: string;
  price!: number;
  image!: string;
  foodType!: number;
  category!: string;
  maxOrder!: number;
  description!: string;
  isActive!: boolean;

}



export class OrdersModel {
  invoiceId!: number | undefined | null;
  autoReserve: boolean = false;
  entries: Array<ordersDetails> = new Array<ordersDetails>();
  password!: string;

}


export class ordersDetails {
  orderId!: number | undefined;
  status!: OrderStatus;
  orderDate!: string | undefined;
  orderFoods: Array<orderFoodsModel> = new Array<orderFoodsModel>();
}

export class orderFoodsModel {
  orderId!: number;
  foodId!: number;
}
export class UserOrdersModel {
  id ?: number;
  Filters?: string;
  Sorts?: string;
  Page?: number;
  PageSize?: number;
  FromDate?: string;
  ToDate?: string;


}
export class OrderCommentsModel {
  orderId?: number;
  foodId?: number;
  rate?: number;
  commentText?: string;
}


export interface UserFinanceReport {
  fromSalarySum: number;
  orderCount: number;
  subsidSum: number;
  totalPricesSum: number;
  userDisplayName: string;
  userId: number;
  userName: string;
  userPaiedSum: number;
}

export interface GeneralRestaurantFinanceReport {
  foodId: number;
  foodName: string;
  orderCount: number;
  sumPrice: number;
}

export interface RestaurantFinanceReport {
  restaurantId: number;
  restaurantName: string;
  orderCount: number;
  paiedAmount: number;
  restaurantStartDate: string;
}

export interface UserOrdersParams {
  id: number;
  filters: string;
  sorts: string;
  page: number;
  pageSize: number;
  fromDate: string;
  toDate: string;
}

export interface UserOrder {
  invoiceId: number;
  totalPrice: number;
  otherPrice: number;
  subsid: number;
  fromSalary: number;
  rate: number;
  status: number;
  orderDate: string;
  commentId: number;
  foods: FoodOrder[];
  orderId: number;
}

export interface FoodOrder {
  orderFoodId: number
  orderId: number;
  restaurantId: number;
  restaurantName: string;
  restaurantLogo: string;
  foodId: number;
  foodName: string;
  foodType: number;
  price: number;
}

export interface WeeklyRestaurantOrderReport {
  orderDate: string;
  foodId: number;
  foodName: string;
  sumPrice: number;
  orderCount: number;
}
