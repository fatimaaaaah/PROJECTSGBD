import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transactions/transaction.model'; // Import your transaction model

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = []; // Assuming you have an array of transactions
  numberOfClients!: number;
  numberOfTransactions!: number;

  constructor() {
    // Simulated data for transactions
    this.transactions = [
      { id: 1, clientId: 101, productName: 'Product A', amount: 100, status: 'Terminé' },
      { id: 2, clientId: 102, productName: 'Product B', amount: 150, status: 'En cours' },
      { id: 3, clientId: 103, productName: 'Product C', amount: 200, status: 'En attente' }
      // Add more transactions as needed
    ];
  }
  
  ngOnInit(): void {
    // Simulated values for number of clients and transactions
    this.numberOfClients = 1000; // Simulated number of clients
    this.numberOfTransactions = this.transactions.length; // Number of transactions is the length of the transactions array
  }
}
