import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeliverComponent } from './components/deliver/deliver.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'deliver', component: DeliverComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
