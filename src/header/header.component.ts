import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
