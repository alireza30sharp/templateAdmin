import { foodModel } from ".";

export class orderItemModel {
  foodId?: number;
  restaurantName?: string;
  restaurantLogo?:string;
  name?: string;
  price?: number;
  image?: string;
  foodType: FoodType = FoodType.Dessert;
  category?: string;
  description?:string;
  isActive?: true;
  rate: number=0;
  commentCount?: number;
  remainOrder?: number;
  selectFood?: boolean;

}


export class orderItem {
  foodtype?: FoodType;
  food!:orderItemModel;

}




export interface IOrderItem {
  orderItem: Array<orderItemModel>
}


export class settingsOrderModel {
  subsid!: number
  fromSalary!: number;
}


export enum FoodType {
  /// <summary>
  /// غذای اصلی
  /// </summary>
  MainFood = 1,
  /// <summary>
  /// دسر و مخلفات
  /// </summary>
  Dessert = 2,
  /// <summary>
  /// نوشیدنی
  /// </summary>
  Drinks = 3
}



export class myOrdersModel {
  fromSalary!: number;
  invoiceId!: number;
  orderDate!: string;
  orderId!: number;
  otherPrice!: number;
  rate!: number;
  status!: number;
  subsid!: number;
  totalPrice!: number;
  foods: Array<foodModel> = new Array<foodModel>();
  comments: Array<commentsModel> = new Array<commentsModel>();
  DessertName!: string | undefined;
  DrinksName!: string | undefined;
  MainFood!: string | undefined;
  MainFoodId!: number | undefined;
  restaurantName!: string | undefined;
  priceMainFood!: number | undefined;
  sumDessertNameAndDrinksName!: number | undefined;
  restaurantLogo?: string | undefined;
  myPayment?: number | undefined;
}

export class commentsModel {
  commentId!: number;
  commentText!: string;
  insertDate!: string;
  rate!: number;
  replies!: []
  status!: number;
  userDisplayName!: string;
  userId!: number;
  userName!: string;
}


