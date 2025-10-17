import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import page from 'page';

export default function Login() {
  document.body.innerHTML = '';

  const style = document.createElement('style');
  style.textContent = `
      body {
                 margin: 0;
                 font-family: Arial, sans-serif;
                 background:linear-gradient(180deg,#071024 0%, #071831 100%);
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 height: 100vh;

             }

             .container {
                 display: flex;
                 background: white;
                 border-radius: 12px;
                 box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                 overflow: hidden;
                 max-width: 900px;
                 width: 100%;
             }

             /* Left side */
             .left {
                 flex: 1;
                 background: #5e5aaa;
                 color: white;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 justify-content: center;
                 padding: 40px;
             }

             .left img {
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 border: 3px solid white;
                 margin-bottom: 20px;
             }

             .left h1 {
                 margin: 0;
                 font-size: 28px;
             }

             .left p {
                 margin-top: 8px;
                 font-size: 14px;
                 color: #c7d2fe;
             }

             /* Right side */
             .right {
                 flex: 1;
                 padding: 40px;
             }

             .right h2 {
                 text-align: center;
                 margin-bottom: 20px;
                 color: #333;
             }

             .form-group {
                 margin-bottom: 15px;
             }

             label {
                 display: block;
                 margin-bottom: 6px;
                 font-size: 14px;
                 color: #333;
             }

             input {
                 width: 100%;
                 padding: 10px;
                 border: 1px solid #ccc;
                 border-radius: 6px;
             }

             button {
                 width: 100%;
                 padding: 12px;
                 background: #5d5a91;
                 border: none;
                 border-radius: 6px;
                 color: white;
                 font-size: 16px;
                 cursor: pointer;
             }

             button:hover {
                 background: #4338ca;
             }

             .forgot {
                 display: block;
                 margin-top: 8px;
                 font-size: 12px;
                 text-align: right;
                 color: #4f46e5;
                 text-decoration: none;
             }

             .forgot:hover {
                 text-decoration: underline;
             }

  `;
  document.head.appendChild(style);

  const main = document.createElement('main');
  main.innerHTML = `
  <div class="container">
      <div id="particles-js" class="position-absolute top-0 start-0 w-100 h-100" style="z-index:-1;"></div>

      <div class="left text-center">
          <h1 class="center">Evergreen Academy</h1>
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
              <button id='login-btn' type="submit">Login</button>
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
