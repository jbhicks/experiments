import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent],
  template: `
    <app-greeting name="Angular Elements" greeting="Welcome to"></app-greeting>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-element';
}
