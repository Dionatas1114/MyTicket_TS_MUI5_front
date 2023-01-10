interface Tickets {
  userId: number;
}

interface Contacts {
  id: number;
  name: string;
  number: string;
  email?: string;
  isGroup?: boolean;
  profilePicUrl?: string;
  tickets?: Tickets[];
  createdAt?: Date;
  updatedAt?: Date;
}

export type { Contacts, Tickets };
