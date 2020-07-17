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

import { ArticleGetAllService } from '../../../services/index';

@Component({
  selector: 'app-list-articles-page',
  templateUrl: './list-articles-page.component.html',
  styleUrls: ['./list-articles-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListArticlesPageComponent {
  public articleList: any;
  public externalArticleList: any;

  constructor(
    private articleGetAllService: ArticleGetAllService
  ) {
    this.articleGetAllService.load(true)
      .subscribe(resp => {
        console.log('resp', resp);
        this.articleList = resp;
      });

    this.articleGetAllService.loadExternal(true)
      .subscribe(resp => {
        console.log('resp', resp);
        this.externalArticleList = resp;
      });
  }

}
