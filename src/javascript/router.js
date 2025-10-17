import page from 'page';
// import Home from './pages/home.js';
// import Login from './pages/login.js';
// import Contact from './pages/contact.js';
import '/src/css/global.css';
page('/', async () => {
  document.body.innerHTML = '';
  await import("/src/javascript/pages/home.js").then(module => module.default());
  Home();
});

page('/contact', async () => {
  document.body.innerHTML = '';
  await import("/src/javascript/pages/contact.js").then(module => module.default());
  Contact();
});
page('/login', async () => {
  document.body.innerHTML = '';
  await import("/src/javascript/pages/login.js").then(module => module.default());
  Login();
});

page();
