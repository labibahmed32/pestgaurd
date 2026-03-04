const flexOrderSections = document.querySelectorAll('.flex-order');

// JS used to dynamically append margin-bottom property in accordance to given Flex Order property on flex containers direct children (fragment)

function AppendFragmentsSpacingStyleProps(sections) {
	sections.forEach((section) => {
		const filteredFragments = Array.from(section.children).filter((child) => {
			return child.classList.contains('fragment');
		});
		if (!filteredFragments) return;
		filteredFragments
			.sort((a, b) => {
				const order1 = parseInt(a.style.order);
				const order2 = parseInt(b.style.order);
				return order1 - order2;
			})
			.forEach((fragment, index) => {
				if (index + 1 == filteredFragments.length) {
					fragment.style.marginBottom = '0px';
				} else {
					if (window.innerWidth > 768) {
						fragment.style.marginBottom = '40px';
					} else {
						fragment.style.marginBottom = '16px';
					}
				}
			});
	});
}

AppendFragmentsSpacingStyleProps(flexOrderSections);
window.addEventListener('resize', () => {
	AppendFragmentsSpacingStyleProps(flexOrderSections);
});
