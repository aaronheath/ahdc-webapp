import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // animations: [
  //   trigger('linkState', [
  //     state('true', style({})),
  //     state('false', style({})),
  //     transition('false => true', animate('100ms ease-in')),
  //     transition('true => false', animate('100ms ease-out')),
  //   ]),
  // ],
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false;
  onArticles: string = 'true';

  constructor() { }

  ngOnInit() { }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
