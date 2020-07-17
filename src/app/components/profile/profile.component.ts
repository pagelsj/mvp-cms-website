import { Component, Input, OnInit } from '@angular/core';

import { ProfileService } from './profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  @Input() userId: string; // = sessionStorage.getItem("client_id");
  private loaded = false;
  public given_name: string;
  public family_name: string;
  public bio: string;
  public email: string;
  public website: string;
  public image: string;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(){
    this.profileService.load(this.userId).subscribe(resp => {
      this.given_name = resp.given_name;
      this.family_name = resp.family_name;
      this.bio = resp.bio;
      this.website = resp.website;
      this.image = resp.image;

      this.loaded = true;
    });
  }

}
