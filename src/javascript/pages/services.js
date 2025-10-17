import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../components/header.js';

export default function Services() {
  if (!sessionStorage.getItem('login_refreshed')) {
    sessionStorage.setItem('login_refreshed', 'true');
    location.reload();
    return;
  } else {
    sessionStorage.removeItem('login_refreshed');
  }

  document.body.innerHTML = '';
  document.body.style = 'background: linear-gradient(180deg,#071024 0%, #071831 100%);';
  const main = document.createElement('main');
  main.style.position = 'relative';
  main.style.minHeight = '100vh';
  main.style.overflow = 'hidden';
  document.body.append(main);
  document.body.prepend(Header());

  const particlesDiv = document.createElement('div');
  particlesDiv.id = 'particles-js';
  particlesDiv.style.position = 'absolute';
  particlesDiv.style.top = '0';
  particlesDiv.style.left = '0';
  particlesDiv.style.width = '100%';
  particlesDiv.style.height = '100%';
  particlesDiv.style.zIndex = '-1';
  main.append(particlesDiv);

  const content = document.createElement('div');
  content.classList.add('text-center');
  content.style.position = 'relative';
  content.style.zIndex = '1';
  content.innerHTML = `
    <div class="container py-5">
      <h1 class="text-light fw-bold mb-5">School Electronic Services</h1>
      <div class="row g-4 justify-content-center">
        <div class="col-md-5">
          <div class="card shadow-sm p-4 border-0 bg-light bg-opacity-75">
            <div class="icon mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="3" width="40" height="30" rx="3" ry="3"></rect>
                <line x1="4" y1="13" x2="44" y2="13"></line>
                <circle cx="10" cy="36" r="3"></circle>
                <circle cx="38" cy="36" r="3"></circle>
                <path d="M8 33h32"></path>
              </svg>
            </div>
            <h3 class="fw-bold">School Bus Booking</h3>
            <p class="text-muted">Reserve your seat easily and get instant confirmation for pickup and drop-off times.</p>
            <a href="/bus" class="btn btn-primary w-100">Book Now</a>
          </div>
        </div>

        <div class="col-md-5">
          <div class="card shadow-sm p-4 border-0 bg-light bg-opacity-75">
            <div class="icon mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="21" cy="21" r="16"></circle>
                <line x1="32" y1="32" x2="44" y2="44"></line>
              </svg>
            </div>
            <h3 class="fw-bold">Information Search</h3>
            <p class="text-muted">Quickly find student and teacher info, including contact details and profiles.</p>
            <a href="/search" class="btn btn-primary w-100">Start Search</a>
          </div>
        </div>
      </div>
    </div>
  `;
  main.append(content);

  const particlesScript = document.createElement('script');
  particlesScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
  particlesScript.onload = () => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#007bff' },
        shape: { type: 'polygon' },
        opacity: { value: 0.6 },
        size: { value: 25 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#007bff',
          opacity: 0.4,
          width: 1
        },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false } }
      },
      retina_detect: true
    });
  };
  document.head.append(particlesScript);
}
