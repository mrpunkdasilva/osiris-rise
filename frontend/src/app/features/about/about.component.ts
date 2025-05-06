import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <section class="about-header">
        <div class="container">
          <h1>Sobre o Osiris Rise</h1>
          <p>Conheça a história e a missão do Osiris Rise, um aplicativo de transformação pessoal inspirado na mitologia egípcia.</p>
        </div>
      </section>

      <!-- Conteúdo sobre -->
      <section class="about-content">
        <div class="container">
          <div class="about-section">
            <h2>Nossa História</h2>
            <p>
              O Osiris Rise nasceu da ideia de unir tecnologia, gamificação e mitologia para criar uma ferramenta poderosa de transformação pessoal.
              Inspirados pela história de Osíris, deus egípcio que simboliza morte e renascimento, criamos uma plataforma que ajuda as pessoas a
              "renascerem" de seus vícios e hábitos negativos.
            </p>
          </div>

          <div class="about-section">
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é ajudar pessoas a superarem vícios, estabelecerem hábitos saudáveis e acompanharem seu progresso físico e mental
              através de uma jornada gamificada que mantém a motivação e torna o processo de transformação mais engajador e efetivo.
            </p>
          </div>

          <div class="about-section">
            <h2>Nossa Equipe</h2>
            <p>
              Somos um grupo de desenvolvedores, designers e especialistas em comportamento humano apaixonados por criar ferramentas que
              impactam positivamente a vida das pessoas. Acreditamos no poder da tecnologia como catalisadora de mudanças positivas.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
    }

    .about-header {
      padding: 5rem 0;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      max-width: 800px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      line-height: 1.6;
    }

    .about-content {
      padding: 3rem 0;
    }

    .about-section {
      margin-bottom: 4rem;
    }

    .about-section h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.5rem;
    }

    .about-section h2:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: #e74c3c;
    }
  `]
})
export class AboutComponent {}
