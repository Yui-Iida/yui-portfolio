// lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
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

// Sticky Navigation

const nav = document.querySelector('.nav');
const header = document.querySelector('.section-header');

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

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

  if (!isSp) {
    if (scroll > 1000 && scroll < 5300) {
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.backgroundColor = '#333';
    }
  } else {
    if (scroll > 1000 && scroll < 4200) {
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.backgroundColor = '#333';
    }
  }
});
