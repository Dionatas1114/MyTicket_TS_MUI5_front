interface QuickAnswer {
  id: number;
  shortcut: string;
  message: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { QuickAnswer };
