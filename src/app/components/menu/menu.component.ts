import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'src/global/scroll-to.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private scrollToService: ScrollToService) {}

  scroll(id: string) {
    this.scrollToService.scrollTo(id);
  }
}
