export default function Header(title = 'Edu School') {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-primary w-100  navbar-dark p-3">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">${title}</a>

        <button class="navbar-toggler noborder" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav"
          aria-controls="mobileNav" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-none d-lg-flex" id="mainNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link active" href="/services">Services</a></li>
            <li class="nav-item"><a class="nav-link active" href="/contact">Contact</a></li>
            <li class=""><a class=" btn btn-danger p-2 mx-3 text-light" href="/login">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="offcanvas offcanvas-end bg-primary text-white" tabindex="-1" id="mobileNav"
      aria-labelledby="mobileNavLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fw-bold" id="mobileNavLabel">${title}</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link text-white active" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="/services">Services</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="/contact">Contact</a></li>
          <li class=""><a class=" btn btn-danger p-2 text-light" href="/login">Login</a></li>
        </ul>
      </div>
    </div>
  `;
  return header;
}
