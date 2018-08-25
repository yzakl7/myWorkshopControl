import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientList: AngularFireList<any>;
  selectedClient: Client = new Client();

  constructor(private firebase: AngularFireDatabase) { }

  getClients() {
    return this.clientList = this.firebase.list('clients');
  }
  insertClient(client: Client) {
    this.clientList.push({
      name: client.name,
      phone: client.phone,
      email: client.email,
      address: client.address,
      // cars: client.cars,
      // transactions: client.transactions
    });
  }
  updateClient(client: Client) {
    this.clientList.update(client.$key, {
      name: client.name,
      phone: client.phone,
      email: client.email,
      address: client.address,
      // cars: client.cars,
      // transactions: client.transactions
    });
  }
  deleteClient($key: string) {
    this.clientList.remove($key);
  }
}
