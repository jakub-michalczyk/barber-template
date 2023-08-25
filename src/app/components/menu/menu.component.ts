import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  scrollTo(id: string) {
    const elementPosition =
      document.querySelector(`#${id}`)!.getBoundingClientRect().top +
      window.scrollY;

    window.scroll({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
}
