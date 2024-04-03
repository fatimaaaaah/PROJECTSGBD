// transaction.service.ts
import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions(): Transaction[] {
    // Simuler des données pour le moment
    return [
      { id: 1, clientId: 1, productName: 'Produit 1', amount: 100, status: 'En cours' },
      { id: 2, clientId: 2, productName: 'Produit 2', amount: 200, status: 'En cours' },
      { id: 3, clientId: 3, productName: 'Produit 3', amount: 300, status: 'En cours' },
      // Ajoutez plus de données ici
    ];
  }
}
