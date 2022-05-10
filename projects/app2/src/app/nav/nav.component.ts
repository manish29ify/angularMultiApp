import { Component, OnInit } from '@angular/core';
import { SidemenuService } from '../services/sidemenu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  opened: boolean = true;
  constructor(sidemenuService: SidemenuService) {
    sidemenuService.sideBarOpened.subscribe(val => this.opened = val);
  }

  ngOnInit(): void {
  }

}
