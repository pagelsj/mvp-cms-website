import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSearchPageComponent } from './tag-search-page.component';

describe('TagSearchPageComponent', () => {
  let component: TagSearchPageComponent;
  let fixture: ComponentFixture<TagSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
