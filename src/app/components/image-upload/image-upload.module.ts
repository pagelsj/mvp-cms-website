import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ImageUploadComponent } from './image-upload.component';
import { ImageUploadService } from './image-upload.service';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    ImageUploadComponent
  ],
  declarations: [
    ImageUploadComponent
  ],
  providers: [
    ImageUploadService
  ]
})
export class ImageUploadModule{ }
