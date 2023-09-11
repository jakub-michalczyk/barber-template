import { Component } from '@angular/core';
import { LightboxService } from 'src/global/lightbox-service.service';

export namespace Gallery {
  export interface ImagesData {
    [key: string]: string | Column[];
    columns: Column[];
  }

  export interface Column {
    images: Image[];
  }

  export interface Image {
    name: string;
    isBigImage: boolean;
    id: number;
  }
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images = {
    columns: [
      {
        images: [
          {
            name: 'gallery_1',
            isBigImage: true,
            id: 0,
          },
        ],
      },
      {
        images: [
          {
            name: 'gallery_2',
            isBigImage: false,
            id: 1,
          },
          {
            name: 'gallery_3',
            isBigImage: false,
            id: 2,
          },
        ],
      },
    ],
  } as Gallery.ImagesData;
  constructor(private lightBoxService: LightboxService) {}

  openLightBox(imageID: number) {
    this.lightBoxService.open(this.images, imageID);
  }
}
