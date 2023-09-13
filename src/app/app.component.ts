import { Component, OnInit } from '@angular/core';
import { LightboxService } from 'src/global/lightbox-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLightBox = false;
  sub: Subject<boolean> = new Subject<boolean>();
  constructor(private lightBoxService: LightboxService) {}

  ngOnInit() {
    this.lightBoxService.sub.subscribe((data) => {
      this.showLightBox = data;
    });
  }
}
