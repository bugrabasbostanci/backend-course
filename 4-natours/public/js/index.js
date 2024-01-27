import '@babel/polyfill';
import { login, logout } from './login';

const logOutBtn = document.querySelector('.nav__el--logout');
const loginForm = document.querySelector('.form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});

if (logOutBtn) logOutBtn.addEventListener('click', logout);
