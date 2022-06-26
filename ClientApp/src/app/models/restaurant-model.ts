export class restaurantModel {
  address?: string;
  restaurantId?: number;
  name?: string;
  phoneNumber?: string;
  logo!: string;
  insertDate?: string;
  isActive?: true;
  isSelected: boolean = false;
  rate!: number;
  commentsCount!: number;
}



