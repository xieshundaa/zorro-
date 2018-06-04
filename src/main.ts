import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

import { AppModule } from './app/app.module';
// (<any>window).environment = environment;

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);
console.log(environment); // 打印看环境文件是否加载正确

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('Ammm.. HMR is not enabled for webpack');
  }
} else {
  bootstrap();
}
