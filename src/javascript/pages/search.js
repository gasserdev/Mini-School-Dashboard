import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/css/search.css';
import Header from '../components/header.js';
import page from 'page';

export default function Search() {
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
  <div class="container mt-5">
  <div id="particles-js" class="position-absolute top-0 start-0 w-100" style="height:130vh;z-index:-1;"></div>

    <h1 class="text-center text-light mb-4">Search for Students and Teachers</h1>

    <div class="card p-4">
      <h2 class="text-center text-primary mb-4">Find Any Student or Teacher</h2>

      <div class="mb-3">
        <label for="search" class="form-label fw-bold">Enter name to search:</label>
        <input
          type="text"
          id="search"
          class="form-control"
          placeholder="Example: Ahmed Mohamed Ali"
        />
      </div>

      <div class="no-results text-center text-danger fw-bold" id="no-results">
        No matching results found
      </div>

      <div class="text-center mt-4" id="result-card">
        <table class="table table-borderless text-light mt-3" id="results-table"></table>
      </div>
    </div>
  </div>
  `;
  document.body.append(main);

  const searchInput = document.getElementById('search');
  const resultsTable = document.getElementById('results-table');
  const noResults = document.getElementById('no-results');

  let students = [];
  let teachers = [];

  Promise.all([
    fetch('https://mini-school-dashboard-db.vercel.app/students.json').then(res => res.json()),
    fetch('https://mini-school-dashboard-db.vercel.app/teachers.json').then(res => res.json())
  ])
    .then(([studentsData, teachersData]) => {
      students = studentsData;
      teachers = teachersData;
    })
    .catch(err => console.error('Error fetching data:', err));

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    resultsTable.innerHTML = '';
    if (!query) {
      noResults.style.display = 'none';
      return;
    }

    const matchedStudents = students.filter(s =>
      `${s.firstName} ${s.lastName}`.toLowerCase().includes(query)
    );
    const matchedTeachers = teachers.filter(t =>
      `${t.firstName} ${t.lastName}`.toLowerCase().includes(query)
    );

    const allResults = [...matchedStudents, ...matchedTeachers];

    if (allResults.length === 0) {
      noResults.style.display = 'block';
      return;
    }

    noResults.style.display = 'none';

    allResults.forEach(person => {
      const isStudent = person.grade !== undefined;

      resultsTable.innerHTML += `
        <tr class="border-bottom">
          <td>
            <strong>${person.firstName} ${person.lastName}</strong><br>
            ${isStudent ? `<small>Grade: ${person.grade}, Class: ${person.class}</small>`
                        : `<small>Subject: ${person.subject}</small>`}
          </td>
          <td>${person.email ? person.email : 'N/A'}</td>
          <td>${person.phone ? person.phone : 'N/A'}</td>
        </tr>
      `;
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
        move: { enable: true, speed: 3 },
      },
      interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false } },
      },
      retina_detect: true,
    });
  }
}
