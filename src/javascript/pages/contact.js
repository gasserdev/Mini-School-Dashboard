import Header from '../components/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/css/contact.css';

export default function Contact() {
  if (!sessionStorage.getItem('login_refreshed')) {
    sessionStorage.setItem('login_refreshed', 'true');
    location.reload();
    return;
  } else {
    sessionStorage.removeItem('login_refreshed');
  }
  document.body.innerHTML = '';
  document.body.prepend(Header());

  const main = document.createElement('main');
  main.innerHTML = `
    <div class="container text-center py-5">
      <h2>Contact Us</h2>
      <p class="lead mb-4">Feel free to reach out to us!</p>

      <div class="contacts d-flex flex gap-4">
      <div id="particles-js" class="position-absolute top-0 start-0 w-100 h-100" style="z-index:-1;"></div>

        <div class="contact-card p-3 border rounded shadow-sm">
          <div class="avatar bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width:50px;height:50px;">P1</div>
          <div class="info mt-2">
            <p class="name fw-bold mb-1">Gasser Zayed</p>
            <p class="role mb-2">Responsible / For inquiries and contact</p>
            <div class="meta d-flex gap-2">
              <button class="btn btn-outline-primary btn-sm" data-phone="01210198741">Copy Phone</button>
              <a href="FACEBOOK_URL_1" target="_blank" class="btn btn-outline-primary btn-sm">Facebook</a>
              <a href="https://github.com/gasserdev" target="_blank" class="btn w-75 btn-outline-dark btn-sm">GitHub</a>
            </div>
          </div>
        </div>

        <div class="contact-card p-3 border rounded shadow-sm">
          <div class="avatar bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width:50px;height:50px;">P2</div>
          <div class="info mt-2">
            <p class="name fw-bold mb-1">Abdelwahab Anwar</p>
            <p class="role mb-2">Responsible / For inquiries and contact</p>
            <div class="meta d-flex gap-2">
              <button class="btn btn-outline-success btn-sm" data-phone="01149579275">Copy Phone</button>
              <a href="FACEBOOK_URL_2" target="_blank" class="btn btn-outline-primary btn-sm">Facebook</a>
              <a href="https://github.com/aa366" target="_blank" class="btn w-75 btn-outline-dark btn-sm">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
  document.body.append(main);

  main.querySelectorAll('button[data-phone]').forEach(btn => {
    btn.addEventListener('click', () => {
      const phone = btn.getAttribute('data-phone');
      navigator.clipboard.writeText(phone).then(() => {
        const old = btn.innerHTML;
        btn.innerHTML = 'Copied ✓';
        setTimeout(() => btn.innerHTML = old, 1000);
      });
    });
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
