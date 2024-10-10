import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,NgIf, MatBadgeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Input() home = false;
  @Input() badge = 0;
}
