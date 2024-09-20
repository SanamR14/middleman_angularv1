import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, TileComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
