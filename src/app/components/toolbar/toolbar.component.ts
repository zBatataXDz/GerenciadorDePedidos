import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAdjustmentsHorizontal,
  heroArrowLeft,
  heroPlus,
} from '@ng-icons/heroicons/outline';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgIconComponent, FilterModalComponent],
  templateUrl: './toolbar.component.html',
  viewProviders: [
    provideIcons({ heroArrowLeft, heroPlus, heroAdjustmentsHorizontal }),
  ],
})
export class ToolbarComponent {
  filter: boolean = false;
  showFilter() {
    this.filter = !this.filter;
    console.log(`Filter at ${this.filter}`);
  }
}
