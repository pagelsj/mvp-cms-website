import { Component } from '@angular/core';
import { NavigationList } from '../../data/index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public navigation = NavigationList();
}
