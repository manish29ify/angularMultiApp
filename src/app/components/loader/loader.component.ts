import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loader',
  template: `<mat-dialog-content>
    <div class="loader-container">
        <mat-progress-spinner class="example-margin" color="accent" mode="indeterminate" diameter="50">
        </mat-progress-spinner>
        <h3 mat-dialog-close>Loading Please Wait ...</h3>
    </div>
</mat-dialog-content>`,
  styles: [`.loader-container{ display: flex; justify-content: space-evenly; align-items: center;flex-direction: column;}`]
})
export class LoaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log("Loader Set");
  }
}
