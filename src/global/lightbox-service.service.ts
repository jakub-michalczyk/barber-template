import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gallery } from 'src/app/components/gallery/gallery.component';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root',
})
export class LightboxService {
  status = false;
  sub: Subject<boolean> = new Subject<boolean>();
  images = {} as Gallery.ImagesData;
  currentImage = {} as Gallery.Image | null;

  constructor() {
    this.sub.subscribe((value) => {
      this.status = value;
    });
  }

  open(allImages: Gallery.ImagesData, imageID: number) {
    this.images = allImages;
    this.currentImage = this.getImage(imageID);
    this.sub.next(!this.status);
  }

  close() {
    this.sub.next(!this.status);
  }

  getImage(imageId: number): Gallery.Image | null {
    let image = null;
    this.images.columns.forEach((col) => {
      col.images.forEach((img) => {
        if (img.id === imageId) {
          image = img;
        }
      });
    });

    return image;
  }

  updateCurrentImage(image: Gallery.Image) {
    this.currentImage = image;
  }
}
