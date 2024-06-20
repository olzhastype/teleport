import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

}
