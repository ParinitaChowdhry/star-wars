import { Component } from '@angular/core';
import {CATEGORIES} from './category-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars';
  categories=CATEGORIES;
}
