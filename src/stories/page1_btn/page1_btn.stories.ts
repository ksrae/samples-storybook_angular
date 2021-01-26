// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Page1Button from './page1_btn.component';

export default {
  title: 'Samples/Button',
  component: Page1Button,
  argTypes: {
    emitValue: { control: 'text'}
  }
} as Meta;

const Template: Story<Page1Button> = (args: Page1Button) => ({
  component: Page1Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  emitValue: 'Clicked'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
