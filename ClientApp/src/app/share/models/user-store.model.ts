export interface UserState {
  phone?: string;
  guid?: string;
  name?: string;
  pincode?: string;
  securityPhrase?: string;
  changeNumber?: ChangeNumberData | undefined;
  token?: string;
  userInfo?: UserInfo | undefined;
  exchangeInfo?: ExchangeInfo | undefined;
}

/** this interface for keep data of change number steps */
export interface ChangeNumberData {
  oldPhoneNumber?: string;
  oldPincode?: string;
}

/** User information model */
export interface UserInfo {
  avatar?: string;
  displayName?: string;
  id?: number;
  introducerId?: number;
  isActive?: boolean;
  isDeleted?: boolean;
  lastLocation?: string;
  lastLocationDate?: string;
  lastLoginDate?: string;
  lastOnlineDate?: string;
  registerDate?: string;
  roles?: RoleType;
  username?: string;
  balance?: number;
}

export interface ExchangeInfo {
  address: string;
  description: string;
  factorRatio: number;
  id: number;
  interactiveSettings: string;
  isActive: boolean;
  location: string;
  name: string;
  owner: OwnerInfo;
  ownerId: number;
  phoneNumber: string;
  uniqueId: string;
}

export interface OwnerInfo {
  avatar: string;
  displayName: string;
  id: number;
  introducerId: number;
  isActive: boolean;
  isDeleted: boolean;
  lastLocation: string;
  lastLocationDate: string;
  lastLoginDate: string;
  lastOnlineDate: string;
  registerDate: string;
  roles: RoleType;
  username: string;
}

// ** Enums *******************************************

/** Role type of user */
export enum RoleType {
  admin = 'admin', 
}
