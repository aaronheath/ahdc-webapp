import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() extraClasses: string;

  constructor() { }

  ngOnInit() {
  }

}
