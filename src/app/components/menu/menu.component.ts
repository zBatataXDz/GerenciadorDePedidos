import { products } from '../../../static/products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  produtos = products;
}
