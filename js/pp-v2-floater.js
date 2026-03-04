const list = document.querySelector('.observer');
const floatingBar = document.querySelector('.floating-cta');
const helpdesk = document.querySelector('#helpdesk');

let zendesk;

setTimeout(() => {
	zendesk = document.querySelector('iframe#launcher');
}, 600);

const stickyBar = function (entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) {
		if (floatingBar) {
			floatingBar.style.height = `${floatingBar.scrollHeight}px`;
		}
		if (helpdesk) {
			helpdesk.style.bottom = `${floatingBar.scrollHeight + 10}px`;
		}
		zendesk = document.querySelector('iframe#launcher');
		if (zendesk) {
			zendesk.style.bottom = `${floatingBar.scrollHeight + 10}px`;
		}
	} else {
		if (floatingBar) {
			floatingBar.style.height = '0px';
		}
		if (helpdesk) {
			helpdesk.style.bottom = '10px';
		}
		if (zendesk) {
			zendesk.style.bottom = '0px';
		}
	}
};

const observer = new IntersectionObserver(stickyBar, {
	root: null,
	threshold: 0,
});

observer.observe(list);

window.addEventListener('mousemove', function () {
	observer.disconnect(list);
	observer.observe(list);
});

window.addEventListener('resize', function () {
	observer.disconnect(list);
	observer.observe(list);
});
window.addEventListener('scroll', function () {
	observer.disconnect(list);
	observer.observe(list);
});
