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
import { switchMap } from 'rxjs/operators';

const uuid = require('uuid');

import {
  EventPostService,
  EventGetService,
  EventUpdateService,
  EventDeleteService,
  GeoEncodeService
} from '../../../services/index';

@Component({
  selector: 'app-event-article-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEventPageComponent implements OnInit {
  public editMode: boolean = false;
  public contentImageUrl: string;
  public content: any;
  public deleteConfirmed = false;
  public eventGeoLocation = null;
  public newEventConfig = {
    imageName: uuid.v1(),
    dir: 'content/events'
  };

  tags = [
    { label: "Physical Abuse", checked: false },
    { label: "Domestic Violence", checked: false },
    { label: "Sexual Abuse", checked: false },
    { label: "Psychological Abuse", checked: false },
    { label: "Emotional Abuse", checked: false },
    { label: "Financial Abuse", checked: false },
    { label: "Material Abuse", checked: false },
    { label: "Discriminatory Abuse", checked: false },
    { label: "Organisational Abuse", checked: false },
    { label: "Modern Slavery", checked: false },
    { label: "Neglect and Acts of Omission", checked: false },
    { label: "Self-Neglect", checked: false }
  ]

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventPostService: EventPostService,
    private eventGetService: EventGetService,
    private eventUpdateService: EventUpdateService,
    private eventDeleteService: EventDeleteService,
    private geoEncodeService: GeoEncodeService
  ) {
    this.activatedRoute.params
      .subscribe(params => {

        if(params['title']) {
          this.eventGetService.load(params['title'])
            .subscribe(resp => {
              this.editMode = true;

              this.content = resp[0];

              this.eventContent['id'] = this.content.id;
              console.log('this.content.tags', this.content.tags);
              this.content.tags.forEach(tag => {
                this.tags.forEach(item => {
                  if(item.label == tag)
                    item.checked = true;
                });
              });

              this.eventForm.patchValue({
                title: this.content.title,
                about: this.content.about,
                price: this.content.price,
                eventLocation: this.content.eventLocation,
                eventGeoLocation: this.content.eventGeoLocation,
                eventDate: this.content.eventDate,
                timeStart: this.content.timeStart,
                timeEnd: this.content.timeEnd,
                speaker: this.content.speaker,
                eventCapacity: this.content.eventCapacity,
                published: (this.content.published == 'true') ? true : false
              });
              console.log('this.content.published', this.content.published);
              this.center = this.content.eventGeoLocation;
              if(this.content.image){
                this.contentImageUrl = this.content.image;
                this.profileImage(this.content.image);
              }

            });
        }
      });
  }
  public center = null;
  public eventContent = {
    userId: sessionStorage.getItem('client_id'),
    image: ''
  };
  // private test =this.fb.group({
  //   time: null
  // });
  public eventForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    about: new FormControl('', [ Validators.required ]),
    price: new FormControl('', [ Validators.required ]),
    eventLocation: new FormControl('', [ Validators.required ]),
    eventGeoLocation: new FormControl('', [ Validators.required ]),
    eventDate: new FormControl('', [ Validators.required ]),
    timeStart: new FormControl('', [ Validators.required ]),
    timeEnd: new FormControl('', [ Validators.required ]),
    speaker: new FormControl('', [ Validators.required ]),
    eventCapacity: new FormControl('', [ Validators.required ]),
    published: new FormControl(''),
    tags: new FormArray([])
  });

  ngOnInit() {

    // BUILD CHECKBOX LIST
    this.tags.forEach((tagLabel) => {
      const tag = new FormControl(''); // if first item set to true, else false
      (this.eventForm.get('tags') as FormArray).push(tag);
    });
  }

  profileImage(imageUrl) {
    this.eventContent['image'] = imageUrl || null;
  }
  getImageName() {

    let index = this.content.image.indexOf(this.newEventConfig.dir);
    let imageName = this.content.image
      .slice(index)
      .replace(this.newEventConfig.dir + '/', '');

    return imageName.slice(0, imageName.indexOf('.'));
  }

  confirmDelete(event) {
    this.deleteConfirmed = event.target.checked;
  }
  deleteItem() {
    if(this.deleteConfirmed) {
      this.eventDeleteService.delete(this.content.id)
        .subscribe(resp => {

          console.log('DELETED');
          this.router.navigate(['/auth/list-events']);
        });
    }
  }

  onSubmit() {
    this.eventContent = {...this.eventContent, ...this.eventForm.value};

    let list = [];
    this.eventForm.get('tags').value.forEach((value, index) => {
      if(value)
        list.push(this.tags[index].label);
    });
    this.eventContent['tags'] = list;

    if(!this.editMode){
      this.eventPostService.send(this.eventContent)
        .subscribe(resp => {
          alert('New event added!');
          this.router.navigate(['/auth/list-events']);
        });

    } else {
      this.eventUpdateService.send(this.eventContent)
        .subscribe(resp => {
          alert('Event updated!');
          this.router.navigate(['/auth/list-events']);
        });
    }
  }

  geoEncode() {
    if(!this.eventForm.get('eventLocation').value)
      return false;

    this.geoEncodeService.get(this.eventForm.get('eventLocation').value)
      .subscribe(resp => {
        this.eventForm.patchValue({
          eventGeoLocation: resp['results'][0].geometry.location
        });
      });
  }

}
