import {
  OnInit,
  Component,
  EventEmitter,
  Output,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ImageUploadService } from './image-upload.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageUploadComponent implements OnInit {
  selectedFile: ImageSnippet;
  @Input() selectedImage: string;

  @Output() imageUrl = new EventEmitter<string>();
  @Input() config: any;
  @Input() current: string;

  constructor(
    private imageUploadService: ImageUploadService
  ) {}

  ngOnInit() {
    if(this.current)
      this.selectedImage = this.current;

  }

  uploadForm = new FormGroup({
    imageFile: new FormControl('')
  });

  processFile(imageInput: any) {
    console.log('imageInput', imageInput);
    const file: File = imageInput.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageUploadService
        .uploadImage({
            "filename": this.config['imageName'],
            "path": this.config['dir'],
            "image": this.selectedFile.src
          }).subscribe(resp => {
            console.log('resp', resp);
            this.selectedImage = resp.Location;
            this.imageUrl.emit(resp.Location);
          })

    });

    reader.readAsDataURL(file);
  }
}
