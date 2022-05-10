import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {
  sideBarOpened = new Subject<boolean>();
  opened = true;

  // observable = new Observable(subscriber => {
  //   subscriber.next();
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 1000);
  // });

  constructor() {
    // this.observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });

  }

  toggleSidemenu() {
    this.opened = !this.opened;
    this.sideBarOpened.next(this.opened);
    console.log("toggleSidemenu");

  }

  check() {
    console.log("Check Called");

  }




}
