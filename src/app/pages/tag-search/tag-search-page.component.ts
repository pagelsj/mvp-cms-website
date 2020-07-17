import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { TagGetService } from '../../services/index';

@Component({
  selector: 'app-tag-search-page',
  templateUrl: './tag-search-page.component.html',
  styleUrls: ['./tag-search-page.component.scss']
})
export class TagSearchPageComponent {
  public tag: string;
  public content: any;
  public externalContent: any;

  public tags = [
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
    private tagGetService: TagGetService
  ) {
    this.activatedRoute.params
      .subscribe( params => {
        this.tag = params['tag'];

        this.tagGetService.load(params['tag'])
          .subscribe(resp => {
            if(resp.length) {
              const len = resp.length;
              for (let i = 0; i < len; i++){
                resp[i].intro = resp[i].intro.substr(0, 300).replace('<p>', '');
              }
              this.content = resp;
              console.log(this.content);
            }
          });

        this.tagGetService.loadExternal(params['tag'])
          .subscribe(resp => {
            if(resp.length) {
              const len = resp.length;
              for (let i = 0; i < len; i++){
                resp[i].synopsis = resp[i].synopsis.substr(0, 300).replace('<p>', '');
              }
              this.externalContent = resp;
              console.log(this.externalContent);
            }
          });



        titleService.setTitle('I am Arla: ' + this.tag + ' articles and events');
        metaService.addTags([
          {name: 'keywords', content: 'Articles and events to help women that are going through or have gone through '+ this.tag},
          {name: 'description', content: 'Articles and events to help women that are going through or have gone through violent or abusive relationships'},
          {name: 'robots', content: 'index, follow'}
        ]);
      });
  }

}
