import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuClick(event: Event): void {
    // Remove old active element
    (<HTMLAnchorElement>(<HTMLUListElement>event.currentTarget).querySelectorAll('.navbar__link--active')[0]).classList.remove('navbar__link--active');
    // Add current active element
    (<HTMLAnchorElement>event.srcElement).classList.add('navbar__link--active');
  }

}
