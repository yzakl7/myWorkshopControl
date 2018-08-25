import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NgForm } from '@angular/forms';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList: Client[];
  isLoading = true;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
    .snapshotChanges()
    .subscribe(item => {
      this.clientList = [];
      this.isLoading = false;
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.clientList.push(x as Client);
      });
    });
    this.resetForm();
  }
  onSubmit(clientForm: NgForm) {
    if (clientForm.value.$key == null) {
      this.clientService.insertClient(clientForm.value);
    } else {
      this.clientService.updateClient(clientForm.value);
    }
    this.resetForm(clientForm);
  }
  resetForm(clientForm?: NgForm) {
    if (clientForm != null) {
      clientForm.reset();
      this.clientService.selectedClient = new Client();
    }
  }
  onEdit(client: Client) {
    this.clientService.selectedClient = Object.assign({}, client);
  }
  onDelete($key: string) {

    if (confirm('¿Está seguro que desea borrar este cliente?')) {
      if ($key) {
        this.clientService.deleteClient($key);
        alert('successfuly deleted');
      }
    }
  }
}
