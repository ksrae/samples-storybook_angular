import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Page1Button from '../page1_btn/page1_btn.component';
import Page1Text from '../page1_txt/page1_txt.component';
import Page1 from './page1.component';

// import * as HeaderStories from './Header.stories';
import * as Page1BtnStories from '../page1_btn/page1_btn.stories';
import { I18nModule } from 'src/app/i18n.module';

export default {
  title: 'Samples/Page1',
  component: Page1,
  decorators: [
    moduleMetadata({
      declarations: [Page1Button, Page1Text],
      imports: [CommonModule, I18nModule],
    }),
  ],
} as Meta;

const Template: Story<Page1> = (args: Page1) => ({
  component: Page1,
  props: args,
});

export const Page1Group = Template.bind({});

Page1Group.args = {
  inputValue: 'b'
};

// Page1Group.args = {
//   ...Page1BtnStories.Primary.args,
// };

// Page1Btn.args = {
//   ...Page1BtnStories.Primary.args
// };

// export const ReturnValue = Template.bind({});
// ReturnValue.args = {
//   ...Page1TextStories.Primary.args,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
