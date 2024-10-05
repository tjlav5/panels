import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelsComponent } from '../../../panels/src/public-api';
import { PanelComponent } from '../../../panels/src/lib/panel/panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PanelsComponent, PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
