import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent {
  readonly pos = input();
}
