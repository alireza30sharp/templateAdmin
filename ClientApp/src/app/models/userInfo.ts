
/** User information model */
export interface UserInfo {
  automaticReserve?: boolean;
  avatar?: any;
  displayName?: string;
  lastLoginDate?: any;
  organization?: any;
  position?: any;
  username?: any;
  roles?: RoleType;
}

export interface IUpdateProfile {
  automaticReserve?: boolean;
  newDisplayName?: string;
}

export class ResetPasswordModel {
  oldPassword?: string;
  newPassword?: string;
  checkPassword?: string;
}


/** Role type of user */
export enum RoleType {
  Admin = 'admin', // مدیرمهر سام
  Manager = 'manager', // مدیر
  User="user"
}
export class getUsers {
  Filters!: string;
  Sorts!: string;
  Page!: number;
  PageSize!: number;
}

export class addUser {
  userId!: number;
  username?: string;
  cleanPassword!: string;
  checkPassword!: string;
  displayName?: string;
  avatar!: string;
  roles?: string;
  organization?: string;
  position?: string;
  automaticReserve?: boolean;
  isActive?: boolean;
  balance?: number;
  lastLoginDate?: string;
}

