import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.scss']
})
export class FaComponent {
  @Input() i: string; // icon
  @Input() e: string = ''; // extra

  constructor() { }

  classes() {
    return ['fa', `fa-${this.i}`]
      .concat(this.e.split(' '))
      .filter(theClass => !!theClass);
  }
}
