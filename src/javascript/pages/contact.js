import Header from '../components/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/css/contact.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Contact() {
  document.body.innerHTML = '';
  document.body.prepend(Header());

  const main = document.createElement('main');
  main.innerHTML = `
    <div class="container py-5">
      <h2>Contact Us</h2>
      <p class="lead mb-4">Feel free to reach out to us!</p>

      <div class="contacts d-flex flex gap-4">

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

  // Add copy-to-clipboard functionality
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
}
