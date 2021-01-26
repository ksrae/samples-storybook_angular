import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'storybook-page1-btn',
  templateUrl: './page1_btn.html'
})
export default class Page1BtnComponent {
  @Input() emitValue?: string;
  @Output() clickEmitter = new EventEmitter();

  onClick(e: any) {
    console.log('onClicked', this.emitValue);
    this.clickEmitter.emit(this.emitValue);
  }
}
