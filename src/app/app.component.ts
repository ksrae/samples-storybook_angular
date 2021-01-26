import { Component, OnInit } from '@angular/core';
// import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'samples';
  // cnt = 0;
  constructor() {


  }

  ngOnInit() {

    // fromEvent(window, 'abc').subscribe((result: any) => {
    //   console.log('abc', result);
    // });

    // fromEvent<StorageEvent>(window, 'onstorage').pipe(
    //   // filter(event => event.storageArea === sessionStorage),
    //   // filter(event => event.key === "context"),
    //   // map(event => event.newValue)
    // ).subscribe((result: any) => {
    //   console.log('storage', result);
    // });
  }

  // onClick() {
  //   console.log('onClick');
  //   (window as any).abc=`item${this.cnt++}`;

  //   sessionStorage.setItem('item', `item${this.cnt++}`);
  // }

}
