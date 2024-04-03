// transaction.model.ts
export interface Transaction {
    id: number;
    clientId: number;
    productName: string;
    amount: number;
    status: string;
  }
  