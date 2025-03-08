import { createCustomElement } from '@angular/elements';
import { GreetingComponent } from '../greeting/greeting.component';
import { ApplicationRef, EnvironmentInjector, NgZone, inject } from '@angular/core';

export function defineGreetingElement() {
  const injector = inject(EnvironmentInjector);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  
  // Convert Angular component to custom element
  const greetingElement = createCustomElement(GreetingComponent, {
    injector,
  });

  // Register the custom element with the browser
  customElements.define('angular-element', greetingElement);
  
  return {
    destroy: () => {
      appRef.destroy();
    }
  };
}
