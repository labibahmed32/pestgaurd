const menuBtn = document.getElementById('header__menuBtn');
const navMenu = document.querySelector('.navigation--mobile');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header');
const ppV2List = document.querySelector('#mobile-nav');
const navigationLinks = document.querySelectorAll('.navigation-link--mobile');

function setmobileMenuPosition() {
	let mobileTop = headerNav.offsetHeight;
	if (!mobileTop | !headerNav) return;
	window.addEventListener('resize', (event) => {
		const width = event.target.innerWidth;
		let mobileTop = headerNav.clientHeight;
		if (width) {
			let mobileTop = headerNav.clientHeight;
			ppV2List.style.top = `${mobileTop}px`;
		}
		ppV2List.style.top = `${mobileTop}px`;
	});
	ppV2List.style.top = `${mobileTop}px`;
}

setmobileMenuPosition();

navMenu.style.transform = 'translateY(' + -navMenu.clientHeight + 'px)';

menuBtn.addEventListener('click', () => {
	const state = menuBtn.getAttribute('aria-expanded');
	if (state === 'false') {
		menuBtn.classList.add('is-active');
		menuBtn.setAttribute('aria-expanded', 'true');
		navMenu.setAttribute('aria-expanded', 'true');
		navMenu.classList.remove('navigation__opacity');
		navMenu.classList.add('navigation--mobile-enabled');
		navMenu.style.transform = 'translateY(0)';
		navMenu.classList.remove('navigation--mobile-disabled');
	} else {
		menuBtn.classList.remove('is-active');
		menuBtn.setAttribute('aria-expanded', 'false');
		navMenu.setAttribute('aria-expanded', 'false');
		navMenu.classList.add('navigation--mobile-disabled');
		navMenu.style.transform = 'translateY(' + -navMenu.clientHeight + 'px)';
		navMenu.classList.remove('navigation--mobile-enabled');
		setTimeout(() => {
			navMenu.classList.add('navigation__opacity');
		}, 500);
	}
});

navigationLinks.forEach((link) => {
	link.addEventListener('click', (ev) => {
		ppV2List.classList.remove('navigation--mobile-enabled');
		ppV2List.classList.add('navigation--mobile-disabled');
		menuBtn.setAttribute('aria-expanded', 'false');
		menuBtn.classList.remove('is-active');
    navMenu.setAttribute('aria-expanded', 'false');
    navMenu.classList.add('navigation--mobile-disabled');
    navMenu.style.transform = 'translateY(' + -navMenu.clientHeight + 'px)';
    navMenu.classList.remove('navigation--mobile-enabled');
    setTimeout(() => {
      navMenu.classList.add('navigation__opacity');
    }, 500);
	});
});

function scrollToTarget(element, duration) {
	const targetPosition = element.getBoundingClientRect().top;
	const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	const distance = window.innerWidth < 769 ? targetPosition : targetPosition;
	let startTime = null;

	function easeInOutQuad(t) {
		t /= duration / 2;
		if (t < 1) return (distance / 2) * t * t + startPosition;
		t--;
		return (-distance / 2) * (t * (t - 2) - 1) + startPosition;
	}

	function scrollAnimation(currentTime) {
		if (startTime === null) startTime = currentTime;
		const elapsedTime = currentTime - startTime;
		const scrollProgress = easeInOutQuad(elapsedTime);

		window.scrollTo(0, scrollProgress);

		if (elapsedTime < duration) {
			requestAnimationFrame(scrollAnimation);
		}
	}

	requestAnimationFrame(scrollAnimation);
}

const targetElement = document.getElementById('targetElement');

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
	link.addEventListener('click', function (e) {
		const targetSection = document.querySelector(this.getAttribute('href'));
		e.preventDefault();
		scrollToTarget(targetSection, 800);
	});
});
