import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ArticleGetCategoryService } from '../../services/index';
import { CategoryList } from '../../data/index';

@Component({
  selector: 'app-self-growth-page',
  templateUrl: './self-growth-page.component.html',
  styleUrls: ['./self-growth-page.component.scss']
})
export class SelfGrowthPageComponent implements OnInit {
  public categories = CategoryList();
  public content = {};

  constructor (
    private metaService: Meta,
    private titleService: Title,
    private articleGetCategoryService: ArticleGetCategoryService
  ) {
    titleService.setTitle('I am Arla: Self growth articles and events');
    metaService.addTags([
      {name: 'keywords', content: this.categories.toString() },
      {name: 'description', content: 'Articles and events to help women that are going through or have suffered ' + this.categories},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  ngOnInit() {
    this.categories.forEach(category => {
      this.content[category] = [];

      this.articleGetCategoryService.load(category)
        .subscribe(resp => {
          if(resp.length){
            const len = (resp.length > 5) ? 5 : resp.length;
            for (let i = 0; i < len; i++){
              let item = resp[i];
              item.intro = item.intro
                .substr(0, 300)
                .replace('<p>', '')
                .replace('</p>', '');

              this.content[category].push(item);
            }
          };

        });

      this.articleGetCategoryService.loadExternal(category)
        .subscribe(resp => {
          if(resp.length){
            const len = (resp.length > 5) ? 5 : resp.length;
            for (let i = 0; i < len; i++){
              let externalItem = resp[i];
              externalItem.synopsis = externalItem.synopsis
                .substr(0, 300)
                .replace('<p>', '')
                .replace('</p>', '');

              this.content[category].push(externalItem);
            }
              console.log(this.content);
          };

        });
    });

  }

}
