import { Component, Input } from '@angular/core';
import { contentType } from 'src/constants/constant';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent {

  pillText = 'Looking to Learn More?'

}
