const footerContainer = document.querySelector('.footer__innerContainer');

footerContainer.addEventListener('click', (ev) => {
	if (window.innerWidth > 768) return;
	if (!ev.target.classList.contains('footer__heading') || ev.target.classList.contains('footer_heading_static'))
		return;

	const list = ev.target.closest('div');
	const chevron = list.querySelector('.footer__chevron');
	const ul = list.querySelector('ul');
	const isExpanded = ul.classList.contains('expanded');

	if (!isExpanded) {
		ul.style.visibility = 'visible';
		ul.style.height = 'auto';
		const height = ul.scrollHeight + 'px';
		ul.style.height = '0px';

		requestAnimationFrame(() => {
			ul.classList.add('expanded');
			ul.style.height = height;
			ul.style.marginBottom = '25px';
			ul.style.marginTop = '-9px';
			chevron.style.transform = 'rotate(0deg)';
		});

		ul.setAttribute('expanded', 'true');
	} else {
		ul.style.height = '0px';
		ul.style.marginBottom = '0px';
		ul.style.marginTop = '0px';
		chevron.style.transform = 'rotate(-90deg)';
		ul.classList.remove('expanded');

		setTimeout(() => {
			if (!ul.classList.contains('expanded')) {
				ul.style.visibility = 'hidden';
			}
		}, 150);

		ul.setAttribute('expanded', 'false');
	}
});
