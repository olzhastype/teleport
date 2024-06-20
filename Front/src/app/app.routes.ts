import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
];
