const assessmentBars = document.querySelectorAll('.assessment__bar');

function MappedBars(bars) {
	return Array.from(bars)
		.map((item) => {
			return {
				item,
				value: Number(item.getAttribute('data-attribute')),
			};
		})
		.sort((a, b) => b.value - a.value);
}

function calculateBarWidth(bar, value) {
	const fullWidth = mappedValues[0].value;
	const percent = Math.floor((value / fullWidth) * 100);
	if (!percent) return;
	const currentStyles = bar.getAttribute('style');
	bar.setAttribute('style', `--width:${percent}%; ${currentStyles}`);
}

const mappedValues = MappedBars(assessmentBars);

mappedValues.forEach((bar) => {
	return calculateBarWidth(bar.item, bar.value);
});
