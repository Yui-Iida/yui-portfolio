// lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Top animation

// const words = document.getElementsByClassName('word');
// let wordArray = [];
// let currentWord = 0;

// words[currentWord].style.opacity = 1;
// for (let i = 0; i < words.length; i++) {
//   splitLetters(words[i]);
// }

// function changeWord() {
//   let cw = wordArray[currentWord];
//   let nw =
//     currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
//   for (let i = 0; i < cw.length; i++) {
//     animateLetterOut(cw, i);
//   }

//   for (let i = 0; i < nw.length; i++) {
//     nw[i].className = 'letter behind';
//     nw[0].parentElement.style.opacity = 1;
//     animateLetterIn(nw, i);
//   }

//   currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
// }

// function animateLetterOut(cw, i) {
//   setTimeout(function () {
//     cw[i].className = 'letter out';
//   }, i * 80);
// }

// function animateLetterIn(nw, i) {
//   setTimeout(function () {
//     nw[i].className = 'letter in';
//   }, 340 + i * 80);
// }

// function splitLetters(word) {
//   var content = word.innerHTML;
//   word.innerHTML = '';
//   var letters = [];
//   for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }

//   wordArray.push(letters);
// }

// changeWord();
// setInterval(changeWord, 4000);

// Sticky Navigation

// const intro = document.querySelector('#intro');

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(intro);

// Sticky Navigation

const nav = document.querySelector('.nav');
const header = document.querySelector('.section-header');

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

// const intro = document.querySelector('#intro');
// const aboutme = document.querySelector('#aboutme');
// const work = document.querySelector('#work');
// const skill = document.querySelector('#skill');

// smooth scroll

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', e => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = nav.offsetHeight + 15;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

// navigation bar

document
  .querySelector('.icon-mobile-open')
  .addEventListener('click', function () {
    console.log('.btn-mobile-nav');
    document.querySelector('.mobile-menu').classList.toggle('is-active');
    document.querySelector('.icon-mobile-open').classList.toggle('is-active');
    document.querySelector('.icon-mobile-close').classList.add('is-active');
  });

document.querySelector('a[href^="#"]').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('is-active');
});

// header
AOS.init();

// scroll color

const scrollColor = window.addEventListener('scroll', function () {
  let scroll = window.pageYOffset;
  let isSp = this.document.height >= 7500;

  // if (!isSp && scroll > 1000 && scroll < 6000) {
  //   document.body.style.backgroundColor = '#fff';
  // } else if (isSp && scroll > 1000 && scroll < 100000) {
  //   document.body.style.backgroundColor = '#fff';
  // } else {
  //   document.body.style.backgroundColor = '#333';
  // }

  if (!isSp) {
    if (scroll > 1000 && scroll < 9600) {
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.backgroundColor = '#333';
    }
  } else {
    if (scroll > 1000 && scroll < 100000) {
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.backgroundColor = '#333';
    }
  }
});
