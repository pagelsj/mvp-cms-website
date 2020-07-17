import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { EventGetService } from '../../services/index';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {
  public content: any;
  public mapCenter = null;
  public marker = [];

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventGetService: EventGetService
  ) {
    this.activatedRoute.params
      .subscribe( params => {

        this.eventGetService.load(params['title'])
          .subscribe(resp => {
            this.content = resp[0];
            this.mapCenter = this.content.eventGeoLocation;

            titleService.setTitle('I am Arla: ' + this.content.title);
            metaService.addTags([
              {name: 'keywords', content: 'events, '+ this.content.tags},
              {name: 'description', content: this.content.about.substr(0, 300).replace('<p>', '')},
              {name: 'robots', content: 'index, follow'}
            ]);
          });
      });
  }

}
