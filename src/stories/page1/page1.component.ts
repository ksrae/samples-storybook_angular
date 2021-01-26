import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'storybook-page1',
  templateUrl: './page1.html'
})
export default class Page1Component implements OnInit, OnDestroy {
  @Input() inputValue?: string = 'a';
  returnValue?: string;
  message$: any;
  subscription!: Subscription;

  constructor(
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subscription = fromEvent<StorageEvent>(window, "storage").pipe(
      // filter(event => event.storageArea === sessionStorage),
      // filter(event => event.key === "context"),
      // map(event => event.newValue)
    ).subscribe(result => {
      console.log('storage', result);
    });
  }

  onResult(e: string) {
    console.log('onResult', e);
    // this.returnValue = e;
  }

  setLang(type: string) {
    this.translateService.use(type);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
