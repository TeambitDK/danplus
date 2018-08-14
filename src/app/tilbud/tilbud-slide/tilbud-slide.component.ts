import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'et' | 'to';

@Component({
  selector: 'app-tilbud-slide',
  templateUrl: './tilbud-slide.component.html',
  styleUrls: ['./tilbud-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('et', style({ transform: 'translateX(0)' })),
      state('to', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(500))
    ])
  ]
})
export class TilbudSlideComponent {
  @Input() activePane: PaneType = 'et';
}
