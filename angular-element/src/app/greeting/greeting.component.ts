import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  template: `
    <div class="greeting-container">
      <h2>{{ greeting }} {{ name }}</h2>
      <p>This is an Angular Custom Element</p>
    </div>
  `,
  styles: [`
    .greeting-container {
      border: 2px solid #3f51b5;
      border-radius: 5px;
      padding: 20px;
      margin: 10px 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }
    h2 {
      color: #3f51b5;
      margin-top: 0;
    }
  `]
})
export class GreetingComponent {
  @Input() name: string = 'World';
  @Input() greeting: string = 'Hello';
}
