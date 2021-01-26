import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-page1-txt',
  templateUrl: './page1_txt.html'
})
export default class Page1TxtComponent {
  @Input() resultTxt = 'b';
}
