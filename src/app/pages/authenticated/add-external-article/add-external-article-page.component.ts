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
  selector: 'app-add-external-article-page',
  templateUrl: './add-external-article-page.component.html',
  styleUrls: ['./add-external-article-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddExternalArticlePageComponent implements OnInit {
  public editMode: boolean = false;
  public contentImageUrl: string;
  public content: any;
  public deleteConfirmed = false;
  public tags = TagList();
  public categories = CategoryList();
  public newArticleConfig = {
    imageName: uuid.v1(),
    dir: 'content/external'
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
    synopsis: new FormControl('', [ Validators.required ]),
    articleUrl: new FormControl('', [ Validators.required ]),
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

          this.articleGetService.loadExternal(params['title'])
            .subscribe(resp => {

              this.content = resp[0];

              this.articleContent['id'] = this.content.id;

              this.content.tags.forEach(tag => {
                this.tags.forEach(item => {
                  if(item.label == tag){
                    item.checked = true;
                  }
                });
              });


              this.articleForm.patchValue({
                title: this.content.title,
                synopsis: this.content.synopsis,
                articleUrl: this.content.articleUrl,
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
      console.log('tagLabel', tagLabel);
      const tag = new FormControl(tagLabel.checked); // if first item set to true, else false
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
      this.articleDeleteService.deleteExternal(this.content.id)
        .subscribe(resp => {
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
      this.articlePostService.sendExternal(this.articleContent)
        .subscribe(resp => {
          alert('New external article added!');
          this.router.navigate(['/auth/list-articles']);
        });

    } else {
      this.articleUpdateService.sendExternal(this.articleContent)
        .subscribe(resp => {
          alert('External article updated!');
          this.router.navigate(['/auth/list-articles']);
        });
    }
  }

}
