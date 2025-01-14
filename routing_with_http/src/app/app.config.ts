import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  
  //registering your application level routes with the router service
  providers: [provideRouter(routes)]
};
