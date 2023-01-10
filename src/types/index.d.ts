import { User as UserType } from './User';
import { Contact as ContactType } from './Contact';

declare global {
  declare type User = UserType;
  declare type Contact = ContactType;

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
