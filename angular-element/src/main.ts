import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineGreetingElement } from './app/custom-element/greeting-element';
import { ApplicationRef } from '@angular/core';

// Check if we're running in a browser context
if (typeof window !== 'undefined') {
  if (document.querySelector('app-root')) {
    // Normal Angular app bootstrap
    bootstrapApplication(AppComponent, appConfig)
      .catch((err) => console.error(err));
  } else {
    // Custom element initialization
    bootstrapApplication(AppComponent, {
      ...appConfig,
      providers: [
        ...(appConfig.providers || []),
        {
          provide: ApplicationRef,
          useFactory: (appRef: ApplicationRef) => {
            defineGreetingElement();
            return appRef;
          },
          deps: [ApplicationRef]
        }
      ]
    }).catch(err => console.error(err));
  }
}
