import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill-component',
  templateUrl: './pill-component.component.html',
  styleUrls: ['./pill-component.component.scss']
})
export class PillComponentComponent {

  @Input() activeText = 'Read More';

  @Input() staticText: string;

  @Input() hrefPath = '#';

}
