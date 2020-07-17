import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { ProfileService } from '../../../components/index';
import { ProfilePostService } from '../../../services/index';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  profileImageUrl: string;
  imageUploadConfig = {
    imageName: sessionStorage.getItem('client_id'),
    dir: 'profile'
  };

  // private decodedToken = this.jwtHelper.decodeToken(token);
  constructor(
    private router: Router,
    public jwtHelper: JwtHelperService,
    private profilePostService: ProfilePostService,
    private profileGetService: ProfileService
  ) {
    profileGetService.load(sessionStorage.getItem('client_id'))
      .subscribe(resp => {
        this.profileForm.patchValue({
          dob: resp.dob,
          bio: resp.bio,
          website: resp.website,
        })
      });

  }

  profile = {
    client_id: sessionStorage.getItem('client_id'),
    given_name: sessionStorage.getItem('user_name'),
    family_name: sessionStorage.getItem('user_lastname'),
    email: sessionStorage.getItem('user_email'),
    image: (this.profileImageUrl) ? this.profileImageUrl : ''
  };
  profileForm = new FormGroup({
    dob: new FormControl('', [ Validators.required ]),
    bio: new FormControl('', [ Validators.required ]),
    website: new FormControl('')
  });

  profileImage(imageUrl) {
    this.profile['image'] = imageUrl;
  }

  onSubmit() {

    this.profile = {...this.profile, ...this.profileForm.value};
    this.profilePostService.send(this.profile)
      .subscribe(resp => {
        console.log('resp', resp);
        alert("Your profile has been updated");
        this.router.navigate(['/']);
      });

  }
}
