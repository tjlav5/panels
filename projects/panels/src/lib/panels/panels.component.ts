import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-panels',
  standalone: true,
  imports: [],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelsComponent {

}
