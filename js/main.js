'use strict';

{
  const mask = document.getElementById('mask');
  const btn = document.querySelector('.btn');
  const wrapper = document.querySelector('.wrapper');
  const menu = document.getElementById('menu');

  btn.addEventListener('click', () => {
    wrapper.classList.toggle('open');
    mask.classList.toggle('open');
    menu.classList.toggle('open');

  });
}
