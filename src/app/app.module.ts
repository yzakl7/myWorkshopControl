import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { CarsComponent } from './components/cars/cars.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { DeliverComponent } from './components/deliver/deliver.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CarsComponent,
    TransactionsComponent,
    DashboardComponent,
    ReceiveComponent,
    DeliverComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
