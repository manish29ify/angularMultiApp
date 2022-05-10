import { Injectable } from '@angular/core';
import { LoaderComponent } from "./loader.component";
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isShown = false;

  constructor(public dialog: MatDialog) { }


  showLoader() {
    const dialogRef = this.dialog.open(LoaderComponent,
      {
        disableClose: true,
        width: '250px',
        backdropClass: 'backdropBackground'
      });
    this.isShown = true;

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      this.isShown = false;
    });
  }

  hideLoader = () => {
    this.isShown = false;
    this.dialog.closeAll();
  }

  toggleLoader() {
    if (this.isShown == false) {
      this.showLoader();
    } else {
      this.hideLoader();
    }
  }

}
