import { User as UserType } from './User';

declare global {
  declare type User = UserType;

  interface StringElements {
    [string: string]: string;
  }

  interface NumberElements {
    [string: string]: number;
  }

  interface BooleanElements {
    [string: string]: boolean;
  }
}

export {};
