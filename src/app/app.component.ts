import { Component } from '@angular/core';
import { contentType } from 'src/constants/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nova-nex-tech-site';

  contentType = contentType.SubMain;
}
