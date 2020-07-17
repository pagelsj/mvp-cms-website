import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

const uuid = require('uuid');

import { switchMap } from 'rxjs/operators';

import { EventGetAllService } from '../../../services/index';

@Component({
  selector: 'app-list-events-page',
  templateUrl: './list-events-page.component.html',
  styleUrls: ['./list-events-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListEventsPageComponent {
  public eventList: any;

  constructor(
    private eventGetAllService: EventGetAllService
  ) {
    this.eventGetAllService.load(true)
      .subscribe(resp => {
        console.log('resp', resp);
        this.eventList = resp;
      });
  }

}
