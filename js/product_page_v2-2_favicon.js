window.addEventListener('load', () => {
	const faviconMeta = document.getElementById('favicon-theme-color');
	const faviconObserver = document.getElementById('favicon-observer');

	if (!faviconMeta || !faviconObserver) return;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const visibleColor = favicon_vars.faviconObserver;
				const hexColorRegex = /#[0-9A-Fa-f]{6}/;
				const match = visibleColor.match(hexColorRegex);
				const firstHexColor = match ? match[0] : '#fff';
				faviconMeta.setAttribute('content', firstHexColor);
			} else {
				const hiddenColor = favicon_vars.faviconTheme;
				faviconMeta.setAttribute('content', hiddenColor);
			}
		});
	});

	observer.observe(faviconObserver);
});
