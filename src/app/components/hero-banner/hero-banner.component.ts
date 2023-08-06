import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent implements AfterViewInit {
  @Input()
  overlayerValue = 0;

  @ViewChild('overlayerR')
  overlayerRef!: ElementRef;

  ngAfterViewInit() {
    let elem = this.overlayerRef.nativeElement as HTMLDivElement;
    if (this.overlayerValue > 0 && elem) {
      elem.setAttribute(
        'style',
        `background-color: rgba(0, 0, 0, ${this.overlayerValue})`
      );
    }
  }
}
