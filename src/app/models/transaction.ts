import { Car } from './car';
import { Client } from './client';
import { Action } from './action';

export class Transaction {
  $key: string;
  car: Car;
  client: Client;
  dateReceived: string;
  dateDelivered: string;
  bill: number;
  actions: Action[];
}

