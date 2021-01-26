
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { Subject } from 'rxjs';

setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  passArgsFirst: false
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        // { value: 'fr', right: '🇫🇷', title: 'Français' },
        // { value: 'es', right: '🇪🇸', title: 'Español' },
        // { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
};


// export const StoryWithLocale = ({ globals: { locale } }) => {
//   const caption = getCaptionForLocale(locale);
//   return <>{caption}</>;
// };
// const getCaptionForLocale = (locale) => {
//   if(locale == 'kr') {
//     console.log('kr');
//     return '안녕하세요';
//   } else {
//     console.log('en');
//     return 'Hello';
//   }
// }

export const decorators = [
  (args, context) => {
    const {locale} = context.globals;
    console.log('context', context);
    sessionStorage.setItem('context', context);
    const btnko = document.querySelector('#btnko');
    if(btnko) {
      btnko.click();
    }
    // btnko.addEventListener('click', event => {
    //   button.innerHTML = `클릭 수: ${event.detail}`;
    // });
    // document.documentElement.setAttribute('id', 'elLang');
    // document.documentElement.setAttribute('lang', locale);
    return {...args()};
  },
];
