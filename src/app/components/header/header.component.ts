import { Component } from '@angular/core';
import { NavigationList } from '../../data/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	public open = false;
	public navigation = NavigationList();
}

