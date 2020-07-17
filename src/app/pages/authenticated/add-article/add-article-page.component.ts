import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import {
  ArticlePostService,
  ArticleGetService,
  ArticleUpdateService,
  ArticleDeleteService
} from '../../../services/index';
import {
  TagList,
  CategoryList
} from '../../../data/index';

const uuid = require('uuid');

@Component({
  selector: 'app-add-article-page',
  templateUrl: './add-article-page.component.html',
  styleUrls: ['./add-article-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddArticlePageComponent implements OnInit {
  public editMode: boolean = false;
  public contentImageUrl: string;
  public content: any;
  public deleteConfirmed = false;
  public tags = TagList();
  public categories = CategoryList()
  public newArticleConfig = {
    imageName: uuid.v1(),
    dir: 'content/internal'
  };


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articlePostService: ArticlePostService,
    private articleGetService: ArticleGetService,
    private articleUpdateService: ArticleUpdateService,
    private articleDeleteService: ArticleDeleteService
  ) {
  }

  public articleContent = {
    userId: sessionStorage.getItem('client_id'),
    image: ''
  };

  public articleForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    intro: new FormControl('', [ Validators.required ]),
    body: new FormControl('', [ Validators.required ]),
    published: new FormControl(''),
    tags: new FormArray([]),
    category: new FormControl('', [ Validators.required ])
  });

  ngOnInit() {
    if(!this.editMode) {
      this.buildTags();
    }
    this.activatedRoute.params
      .subscribe(params => {
        if(params['title']) {
          this.editMode = true;

          this.articleGetService.load(params['title'])
            .subscribe(resp => {

              this.content = resp[0];

              this.articleContent['id'] = this.content.id;

              this.content.tags.forEach(tag => {
                this.tags.forEach(item => {
                  if(item.label == tag)
                    item.checked = true;
                });
              });

              this.articleForm.patchValue({
                title: this.content.title,
                intro: this.content.intro,
                published: (this.content.published == 'true') ? true : false,
                body: this.content.body,
                category: this.content.category
              });
              this.buildTags();

              if(this.content.image){
                this.contentImageUrl = this.content.image;
                this.profileImage(this.content.image);
              }

            });
        }
      });
  }

  buildTags(){

    // BUILD CHECKBOX LIST
    this.tags.forEach((tagLabel) => {
      const tag = new FormControl(''); // if first item set to true, else false
      (this.articleForm.get('tags') as FormArray).push(tag);
    });
  }

  profileImage(imageUrl) {
    this.articleContent['image'] = imageUrl;
  }
  getImageName() {
    let index = this.content.image.indexOf(this.newArticleConfig.dir);
    let imageName = this.content.image
      .slice(index)
      .replace(this.newArticleConfig.dir + '/', '');

    return imageName.slice(0, imageName.indexOf('.'));
  }

  confirmDelete(event) {
    this.deleteConfirmed = event.target.checked;
  }
  deleteItem() {
    if(this.deleteConfirmed) {
      console.log('this.content.id', this.content.id)
      const imageObj = this.content.image
        .replace('https://iamarla-uploads.s3.eu-west-2.amazonaws.com/', '');

      console.log('imageObj', imageObj);
      this.articleDeleteService.delete(this.content.id, imageObj)
        .subscribe(resp => {

          console.log('DELETED');
          this.router.navigate(['/auth/list-articles']);
        });
    }
  }

  onSubmit() {
    this.articleContent = {...this.articleContent, ...this.articleForm.value};

    let tagList = [];
    let categoryList = [];

    this.articleForm.get('tags').value.forEach((value, index) => {
      if(value)
        tagList.push(this.tags[index].label);
    });
    this.articleContent['tags'] = tagList;

    console.log('this.articleContent', this.articleContent);
    if(!this.editMode){
      this.articlePostService.send(this.articleContent)
        .subscribe(resp => {
          alert('New article added!');
          this.router.navigate(['/auth/list-articles']);
        });

    } else {
      this.articleUpdateService.send(this.articleContent)
        .subscribe(resp => {
          alert('Article updated!');
          this.router.navigate(['/auth/list-articles']);
        });
    }
  }

}
