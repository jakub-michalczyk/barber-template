import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlockScrollService {
  toggle() {
    window.document.body.classList.contains('block-scroll')
      ? window.document.body.classList.add('block-scroll')
      : window.document.body.classList.remove('block-scroll');
  }
}
