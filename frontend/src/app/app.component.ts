import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <header>
        <h1>Osiris Rise</h1>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer>
        <p>© 2025 Osiris Rise - Transformação Pessoal Gamificada</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    header {
      padding: 1rem;
      background-color: #2c3e50;
      color: white;
      text-align: center;
    }
    
    main {
      flex: 1;
      padding: 1rem;
    }
    
    footer {
      padding: 1rem;
      background-color: #2c3e50;
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
  `]
})
export class AppComponent {
  title = 'Osiris Rise';
}