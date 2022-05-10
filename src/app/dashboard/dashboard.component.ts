import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidemenuService } from "../../../projects/app2/src/app/services/sidemenu.service";
// import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderService } from "../components/loader/loader.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(public sideMenu: SidemenuService, public dialog: LoaderService) { }

  ngOnInit(): void {
    this.sideMenu.check();
  }

  toggleDrawer() {
    this.sideMenu.toggleSidemenu();
    console.log("toggleDrawer");

  }

  openDialog() {
    this.dialog.toggleLoader();
    // const dialogRef = this.dialog.open(LoaderComponent,
    //   {
    //     disableClose: true,
    //     width: '250px',
    //     backdropClass: 'backdropBackground'
    //   });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
