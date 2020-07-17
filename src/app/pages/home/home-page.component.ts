import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import {
  ArticleGetAllService,
  EventGetAllService
} from '../../services/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  private externalArticles = false;
  private internalArticles = false;
  private internalEvents = false;

  public tempArticles = [];
  public tempEvents = [];

  public latestArticles = [];
  public latestEvents = [];


  constructor(
    private metaService: Meta,
    private titleService: Title,
    private articleGetAllService: ArticleGetAllService,
    private eventGetAllService: EventGetAllService
  ) {

    this.articleGetAllService.load()
      .subscribe(resp => {
        let articleCount = (resp.length >= 5) ? 5 : resp.length;
        for(let i=0; i < articleCount; i++) {
          this.tempArticles.push(resp[i]);
        }
        this.internalArticles = true;
        this.sortArticles();
      });
    this.articleGetAllService.loadExternal()
      .subscribe(resp => {
        let articleCount = (resp.length >= 5) ? 5 : resp.length;
        for(let i=0; i < articleCount; i++) {
          this.tempArticles.push(resp[i]);
        }
        this.externalArticles = true;
        this.sortArticles();
      });

    this.eventGetAllService.load()
      .subscribe(resp => {
        let eventCount = (resp.length >= 5) ? 5 : resp.length;
        for(let i=0; i < eventCount; i++) {
          this.tempEvents.push(resp[i]);
        }
        this.internalEvents = true;
        this.sortEvents();
      });

    titleService.setTitle('I am Arla');
    metaService.addTags([
      {name: 'keywords', content: 'women abuse, abusive relationship, violent relationship, self confidence articles, empowerment events'},
      {name: 'description', content: 'I am Arla offers articles and events to help empower women that are going through or have gone through violent or abusive relationships'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
  sortArticles () {
    if(this.tempArticles && this.internalArticles && this.externalArticles) {
      this.latestArticles = this.tempArticles.sort((a, b) => b.updatedAt - a.updatedAt);
      this.latestArticles = this.latestArticles.slice(0,5);
      this.tempArticles = [];
      this.internalArticles = false;
      this.externalArticles = false;
    }
  }
  sortEvents () {
    if(this.tempEvents && this.internalEvents) {
      this.latestEvents = this.tempEvents.sort((a, b) => b.updatedAt - a.updatedAt);
      this.latestEvents = this.latestEvents.slice(0,5);
      this.tempEvents = [];
      this.internalEvents = false;
    }
  }

}
