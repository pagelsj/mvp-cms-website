import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ArticleGetService } from '../../services/index';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent {
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

    // this.content = {"published":"true","image":"https://iamarla-uploads.s3.eu-west-2.amazonaws.com/content/626a16b0-5edb-11ea-90ff-a32dd3cc1f48.jpeg","updatedAt":1583579647618,"userId":"4dtq5jc2mjsqnucf2o71r1i8v0","category":"Professional","intro":"<p>Praesent ut porttitor dolor. Ut nec ullamcorper mi. Sed in luctus felis, id rhoncus sapien. Sed vel lobortis diam, sit amet sagittis orci. Fusce ut laoreet nisi, eget cursus sem. Praesent tempus sapien felis, quis fringilla ipsum lacinia ac. Nam posuere cursus auctor. Sed ultrices efficitur magna, posuere accumsan lectus congue eget. Ut sed urna sed neque vulputate luctus a at justo. Proin convallis ullamcorper turpis id facilisis. Nulla facilisi. Praesent maximus neque vel sapien molestie, ultrices mattis nunc molestie. Sed convallis venenatis tempor. Cras in sollicitudin leo.</p>","id":"86fb8220-5edb-11ea-9d11-0ffe986bd10a","tags":["Physical Abuse","Psychological Abuse"],"body":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta placerat augue, ac luctus magna porttitor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam hendrerit lacinia lacus quis placerat. Integer sed pretium enim. Nam a mi posuere, tempus neque in, blandit velit. Aenean vestibulum, nulla nec facilisis auctor, justo nibh faucibus felis, sed gravida turpis ante nec enim. Morbi feugiat id urna eu sagittis. Phasellus fringilla laoreet sem, nec maximus ligula sagittis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ipsum lectus, nec facilisis felis fermentum at. Sed ut dolor malesuada, viverra nibh vitae, semper mauris. Vestibulum tempor nunc at nunc dignissim, sit amet cursus lacus auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut metus congue, dignissim nibh id, scelerisque tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>","title":"Physical Abuse test article"};

    this.activatedRoute.params
      .subscribe( params => {

        this.articleGetService.load(params['title'])
          .subscribe(resp => {
            this.content = resp[0];

            titleService.setTitle('I am Arla: ' + this.content.title);
            metaService.addTags([
              {name: 'keywords', content: this.content.tags},
              {name: 'description', content: this.content.intro.substr(0, 300).replace('<p>', '')},
              {name: 'robots', content: 'index, follow'}
            ]);
          });
      });


  }
}
