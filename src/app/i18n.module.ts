import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ko',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [TranslateModule]
})
export class I18nModule {

}

////
const staticTranslateLoader: TranslateLoader = {
  getTranslation(lang: string) {
    return of({
      ...require(`../assets/i18n/${lang}.json`),
    });
  }
};
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useValue: staticTranslateLoader,
      }
    })
  ],
  exports: [TranslateModule]
})
export class UserI18nModule implements OnDestroy {
  private observer;
  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('ko');
    this.updateLanguage();
    this.observer = new MutationObserver( () => this.updateLanguage());
    this.observer.observe(document.querySelector('#elLang') as Element, {
      attributes: true,
      attributeFilter: ['lang'],
    });
  }
  ngOnDestroy(): void {
    this.observer.disconnect();
  }
  private updateLanguage(): void {
    this.translate.use((document.querySelector('#elLang') as Element).getAttribute('lang') || 'ko');
  }
}
