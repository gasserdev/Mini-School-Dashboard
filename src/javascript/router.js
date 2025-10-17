import page from 'page';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import '/src/css/global.css';
page('/', () => {
  document.body.innerHTML = '';
  Home();
});

page('/contact', () => {
  document.body.innerHTML = '';
  Contact();
});

page();
