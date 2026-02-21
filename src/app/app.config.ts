import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSocketIo, SocketIoConfig } from 'ngx-socket-io'

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
const config: SocketIoConfig = {
  // url: 'http://localhost:3000',
  url: 'https://init-task-backend.onrender.com',
  options:{}
}



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideSocketIo(config)
  ]
};
