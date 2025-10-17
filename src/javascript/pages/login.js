import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import page from 'page';
import '/src/css/login.css';

export default function Login() {
  document.body.innerHTML = '';


  const main = document.createElement('main');
  main.innerHTML = `
  <div class="container">
      <div id="particles-js" class="position-absolute top-0 start-0 w-100 h-100" style="z-index:-1;"></div>

      <div class="left w-100 text-center bg-primary">
          <h1 class="center">Edu School</h1>
          <p>Where learning never ends</p>
      </div>

      <div class="right">
          <h2>Welcome Back</h2>
          <form>
              <div class="form-group">
                  <label for="email">Email or Student ID</label>
                  <input type="text" id="email" placeholder="Enter your email or ID" required>
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" placeholder="Enter your password" required>
              </div>
              <button id='login-btn' class='btn btn-primary' type="submit">Login</button>
          </form>
      </div>
  </div>
  `;
  document.body.append(main);

  const loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      alert("Please enter your email and password!");
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    console.log("Saved:", email, password);
    page('/services');
  });

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
