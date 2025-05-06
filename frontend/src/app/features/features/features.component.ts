import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <div class="container">
      <h1>Recursos</h1>
      <p>Página em construção...</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `]
})
export class FeaturesComponent {}