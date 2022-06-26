import { orderItemModel } from "./order-item-model";

export class foodSelectionDayOfWeek {
  balanceNumber!: number;
  listDayOfWeek!: Array<dayOfWeek>
}

export class dayOfWeek {
  dayOfWeek!: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  date!: string;
  nameFood!: string;
  isSelectedItem!: boolean;
  detailesInfoFoodSelection!: Array<orderItemModel>
}


export class InfoFoodSelection {
  nameRestaurant!: string;
  //مخلفات و نوشیدینی
  sideDishesDrinks!: string;
  price!: number;
}
