const elCompr = document.querySelector(".el_compressors");
const disCompr = document.querySelector(".dis_compressors");
const generate = document.querySelector(".generate");
const other  = document.querySelector(".other");
let linkToggle = document.querySelectorAll('.js-toggle');
for(i = 0; i < linkToggle.length; i++){
  linkToggle[i].addEventListener('click', function(event){
    event.preventDefault();
    let container = document.getElementById(this.dataset.container);
    if (!container.classList.contains('active')) { 
      container.nextElementSibling.innerHTML="скрыть";
      container.classList.add('active');
      container.style.height = 'auto';
      let height = container.clientHeight + 'px';
      container.style.height = '0px';
      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.nextElementSibling.innerHTML="подробнее";
      container.style.height = '0px';
      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      }); 
    }
  });
}
const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};
let options  = document.querySelectorAll('.options');
[].forEach.call(options, el => {
  el.addEventListener('click', pnlClick, false)
})
let time = 300;
function pnlClick() {
  [].forEach.call(options, el => {
    if (el !== this) el.classList.remove('active_opt');
  });
  this.classList.add('active_opt');
  if (this.classList.contains("all_opt")) {
    fadeIn(elCompr,time,"flex");
    fadeIn(disCompr,time,"flex");
    fadeIn(generate,time,"flex");
    fadeIn(other,time,"flex");
  }
  if (this.classList.contains("el_opt")) {
    fadeIn(elCompr,time,"flex");
    disCompr.style.display="none";
    generate.style.display="none";
    other.style.display="none";
  }
    if (this.classList.contains("dis_opt")) {
    fadeIn(disCompr,time,"flex");
    elCompr.style.display="none";
    generate.style.display="none";
    other.style.display="none";
  }
    if (this.classList.contains("gen_opt")) {
    fadeIn(generate,time,"flex");
    disCompr.style.display="none";
    elCompr.style.display="none";
    other.style.display="none";
  }
    if (this.classList.contains("other_opt")) {
    fadeIn(other,time,"flex");
    disCompr.style.display="none";
    generate.style.display="none";
    elCompr.style.display="none";
  }
}

const menu_a = document.querySelectorAll(".menu_a");
[].forEach.call(menu_a, el => {
  el.addEventListener('click', menuClick, false)
})
function menuClick() {
    if (document.querySelector("#toogle_menu").checked) {
    document.querySelector("#toogle_menu").click();
   }
}
// active class of menu items onscroll
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

    document.querySelectorAll('.sect').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('#menuToggle').clientHeight <= scrollDistance) {
        document.querySelectorAll('.menu_a').forEach((el) => {
          if (el.classList.contains('active_a')) {
            el.classList.remove('active_a');
          }
        });
        document.querySelectorAll('.menu_a')[i].classList.add('active_a');
      }
    });
  
});

