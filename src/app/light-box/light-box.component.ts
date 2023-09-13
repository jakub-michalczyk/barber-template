import { Component, OnInit } from '@angular/core';
import { BlockScrollService } from 'src/global/block-scroll.service';
import { LightboxService } from 'src/global/lightbox-service.service';
import { ScrollToService } from 'src/global/scroll-to.service';
import { Gallery } from '../components/gallery/gallery.component';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss'],
})
export class LightBoxComponent implements OnInit {
  swiper = {} as Swiper;

  constructor(
    private blockService: BlockScrollService,
    private scrollToService: ScrollToService,
    private lightBoxService: LightboxService
  ) {}

  ngOnInit(): void {
    this.scrollToService.scrollTo('gallery');
    this.blockService.toggle();

    //init swiper
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      effect: 'coverflow',
      grabCursor: true,
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    this.swiper.slideTo(this.currentImage!.id);
  }

  close() {
    this.lightBoxService.close();
    this.blockService.toggle();
  }

  next() {
    this.swiper.slideNext();
    this.update();
  }

  previous() {
    console.log(this.swiper.realIndex);

    this.swiper.slidePrev();
    this.update();
  }

  update() {
    let slide = document.querySelector(
      '.swiper-slide-active ._light-box-image'
    ) as HTMLDivElement;
    console.log(slide.dataset.id);
    this.lightBoxService.updateCurrentImage(
      this.images.find((img) => img.id === Number(slide.dataset.id))!
    );
  }

  get images() {
    let allImages: Gallery.Image[] = [];

    this.lightBoxService.images.columns.forEach((col) => {
      col.images.forEach((img) => {
        allImages.push(img);
      });
    });
    return allImages;
  }

  get currentImage() {
    return this.lightBoxService.currentImage;
  }
}
