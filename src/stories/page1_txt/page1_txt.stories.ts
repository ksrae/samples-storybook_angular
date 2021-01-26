import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { I18nModule } from 'src/app/i18n.module';
import Text from './page1_txt.component';

export default {
  title: 'Samples/Text',
  component: Text,
  // argTypes: {
  //   resultTxt: { control: 'text'}
  // },
  decorators: [
    moduleMetadata({
      imports: [I18nModule]
    })
  ]
} as Meta;

const Template: Story<Text> = (args: Text) => ({
  component: Text,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  resultTxt: 'b'
};


// export const decorators = [
//   (args: any, context: any) => {
//     const {locale} = context.globals;
//     console.log('context', context);

//     // document.documentElement.setAttribute('id', 'elLang');
//     // document.documentElement.setAttribute('lang', locale);
//     return {...args()};
//   },
// ];

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
