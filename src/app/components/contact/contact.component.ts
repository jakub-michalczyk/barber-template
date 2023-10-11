import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  openedHours = [
    {
      day: 'Poniedziałek',
      hours: '12:00 - 20:00',
    },
    {
      day: 'Wtorek',
      hours: '12:00 - 20:00',
    },
    {
      day: 'Środa',
      hours: '12:00 - 20:00',
    },
    {
      day: 'Czwartek',
      hours: '12:00 - 20:00',
    },
    {
      day: 'Piątek',
      hours: '12:00 - 20:00',
    },
    {
      day: 'Sobota',
      hours: '13:00 - 18:00',
    },
    {
      day: 'Niedziela',
      hours: 'Zamknięte',
      closed: true,
    },
  ];

  get mapSize() {
    return this.isMobile ? window.innerWidth / 0.75 : window.innerWidth / 2;
  }

  get isMobile() {
    return (
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) &&
      window.innerWidth <= 800
    );
  }
}
