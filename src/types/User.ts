interface Queues {
  id: string;
  name: string;
  color: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  profile?: string;
  customer?: string;
  queues?: Queues;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { Queues, User };
