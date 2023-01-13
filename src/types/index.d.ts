import { User as UserType } from './User';
import { Queue as QueueType } from './Queue';
import { Ticket as TicketType } from './Ticket';
import { Contact as ContactType } from './Contact';
import { Connection as ConnectionType } from './Connection';
import { QuickAnswer as QuickAnswerType } from './QuickAnswer';

declare global {
  declare type User = UserType;
  declare type Queue = QueueType;
  declare type Ticket = TicketType;
  declare type Contact = ContactType;
  declare type Connection = ConnectionType;
  declare type QuickAnswer = QuickAnswerType;

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
