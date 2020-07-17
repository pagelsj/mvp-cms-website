import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ArticleGetService } from '../../services/index';

@Component({
  selector: 'app-external-article-page',
  templateUrl: './external-article-page.component.html',
  styleUrls: ['./external-article-page.component.scss']
})
export class ExternalArticlePageComponent {
  public content: any;
  tags = [
    { lable: "Physical Abuse" },
    { lable: "Domestic Violence" },
    { lable: "Sexual Abuse" },
    { lable: "Psychological Abuse" },
    { lable: "Emotional Abuse" }
  ];

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private articleGetService: ArticleGetService
  ) {
    this.activatedRoute.params
      .subscribe( params => {

        this.articleGetService.loadExternal(params['title'])
          .subscribe(resp => {
            this.content = resp[0];

            titleService.setTitle('I am Arla: ' + this.content.title);
            metaService.addTags([
              {name: 'keywords', content: this.content.tags},
              {name: 'description', content: this.content.synopsis.substr(0, 300).replace('<p>', '')},
              {name: 'robots', content: 'index, follow'}
            ]);
          });
      });
  }
}
