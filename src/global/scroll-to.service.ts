import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToService {
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
