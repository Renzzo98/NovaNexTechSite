import { Component } from '@angular/core';
import { navLink } from 'src/constants/constant';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {

  logoPath = 'assets/logo.png';
  
  navLinkPath = navLink;

}
