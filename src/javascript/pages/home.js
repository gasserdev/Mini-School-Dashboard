import Header from '../components/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/css/home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  document.body.innerHTML = '';
  document.body.prepend(Header());

  const main = document.createElement('main');
  main.innerHTML = `
    <section id="home"  class="hero  py-5 position-relative text-white">
      <div id="particles-js" class="position-absolute top-0 start-0 w-100 h-100" style="z-index:0;"></div>
      <div class="container hero-content text-center position-relative" style="z-index:1;">
        <h1 class="display-5 fw-bold">Welcome to Edu School</h1>
        <p class="lead text-center text-light mb-4">
          We provide exceptional education that prepares students for a bright and successful future, inspired by the values of leadership.
        </p>
        <a href="#about" class="cta-button btn btn-primary btn-lg">Learn More</a>
      </div>
    </section>
    <section id="about" class="section py-5 bg-light">
        <div class="">
            <h2 class="">About Our School</h2>
            <p class="text-secondary">
            Since its establishment, Edu School has been dedicated to providing a top-quality education that nurtures creativity, critical thinking, and personal growth.
            Our teachers strive to create a supportive and inspiring environment where every student can reach their full potential.
            We focus on academic excellence while promoting values such as respect, responsibility, and teamwork, preparing our students to succeed in the modern world.
            </p>
        </div>
    </section>

  `;
  document.body.append(main);

  if (!window.particlesJS) {
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    particlesScript.onload = () => initParticles();
    document.head.append(particlesScript);
  } else {
    initParticles();
  }

  function initParticles() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 900 } },
        color: { value: '#007bff' },
        shape: { type: 'polygon' },
        opacity: { value: 0.6 },
        size: { value: 25 },
        line_linked: { enable: true, distance: 150, color: '#007bff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3 }
      },
      interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false } }
      },
      retina_detect: true
    });
  }
}
