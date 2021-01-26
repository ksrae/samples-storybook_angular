import { storiesOf } from '@storybook/angular';
import { I18nModule } from 'src/app/i18n.module';

storiesOf('Button', module).add('with text', () => ({
  template: `
    <button>{{ 'a' | translate }}</button>
  `,
  moduleMetadata: {
    imports: [I18nModule]
  }
}));



// export const StoryWithLocale = (global: any) => {
//   // const caption = getCaptionForLocale(global.globals.locale);
//   console.log(global);
// //   return `<>{${caption}}</>`;
// };


// export const StoryWithLocale = (args: any, param: any) => {
//   console.log(param);
//   // const caption = getCaptionForLocale(locale);
//   // return `<>{${caption}}</>`;
// };
