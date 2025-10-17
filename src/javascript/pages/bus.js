import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/css/bus.css';
import Header from '../components/header.js';
import page from 'page';

export default function Bus() {
  if (!sessionStorage.getItem('login_refreshed')) {
    sessionStorage.setItem('login_refreshed', 'true');
    location.reload();
    return;
  } else {
    sessionStorage.removeItem('login_refreshed');
  }

  const main = document.createElement('main');
  main.innerHTML = `
  <div class="container fw-bold mt-5 text-light mb-5">
    <div id="particles-js" class="position-absolute top-0 start-0 w-100" style="height:130vh;z-index:-1;"></div>

    <div>
      <h1 class='text-center'>School Bus Booking</h1>
      <h2 class='text-center mb-4'>Bus Seat Reservation Form</h2>
      <form id="busForm" novalidate>
        <div class="mb-3">
          <label for="student-name" class="form-label">Student Name</label>
          <input type="text" id="student-name" class="form-control" required />
          <div class="invalid-feedback">Please enter the student's name.</div>
        </div>

        <div class="mb-3">
          <label for="grade" class="form-label">Grade</label>
          <select id="grade" class="form-select" required>
            <option value="">Select grade</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
          </select>
          <div class="invalid-feedback">Please select a grade.</div>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">Full Address</label>
          <textarea id="address" rows="3" class="form-control" required></textarea>
          <div class="invalid-feedback">Please enter a valid address.</div>
        </div>

        <div class="mb-3">
          <label for="pickup-time" class="form-label">Pickup Time</label>
          <input type="time" id="pickup-time" class="form-control" required />
          <div class="invalid-feedback">Please select pickup time.</div>
        </div>

        <div class="mb-3">
          <label for="dropoff-time" class="form-label">Dropoff Time</label>
          <input type="time" id="dropoff-time" class="form-control" required />
          <div class="invalid-feedback">Please select dropoff time.</div>
        </div>

        <div class="form-check mb-3">
          <input type="checkbox" id="agree" class="form-check-input" required />
          <label for="agree" class="form-check-label text-light">
            I agree to the terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>

        <button id="formBtn" type="submit" class="btn btn-primary w-100">Book Seat Now</button>
      </form>
    </div>
  </div>
  `;

  document.body.append(main);
  document.body.prepend(Header());

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
        move: { enable: true, speed: 3 },
      },
      interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false } },
      },
      retina_detect: true,
    });
  }

  const form = main.querySelector('#busForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    alert("OK")
    page('/services');
  });
}
