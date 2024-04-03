import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients = [
    { id: 1, nom: 'Doe', prenom: 'John', status: 'Actif', dateAdded: '2024-04-01', total: '$1000' },
    { id: 1, nom: 'Doe', prenom: 'John', status: 'Actif', dateAdded: '2024-04-01', total: '$1000' },
    { id: 1, nom: 'Doe', prenom: 'John', status: 'Actif', dateAdded: '2024-04-01', total: '$1000' },
    { id: 1, nom: 'Doe', prenom: 'John', status: 'Actif', dateAdded: '2024-04-01', total: '$1000' },
    // Ajoutez d'autres clients ici
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ajouterClient() {
    // Code pour ajouter un client
    alert("Ajouter un client");
  }

  modifierClient(client: any) {
    // Code pour modifier un client
    alert("Modifier le client : " + client.nom + " " + client.prenom);
  }

  supprimerClient(client: any) {
    // Code pour supprimer un client
    alert("Supprimer le client : " + client.nom + " " + client.prenom);
  }

}
