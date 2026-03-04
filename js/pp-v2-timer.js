//selects spans with attributes

function countDownTimer() {
	let lastVisit = JSON.parse(localStorage.getItem('lastVisit'));
	const now = new Date().getTime();
	if (lastVisit + 1432100 < now) {
		localStorage.removeItem('lastVisit');
		localStorage.setItem('lastVisit', JSON.stringify(now));
		lastVisit = now;
	}
	if (!lastVisit) {
		const date = new Date().getTime();
		localStorage.setItem('lastVisit', JSON.stringify(date));
		lastVisit = date;
	}
	if (!lastVisit) return;
	const countdownDate = lastVisit + 1432100;
	const countdown = setInterval(() => {
		const now = new Date().getTime();
		const distance = countdownDate - now;
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
		const firstMinutesInt = minutes.toString().length !== 1 ? minutes.toString().charAt(0) : 0;
		const secondMinutesInt =
			minutes.toString().length !== 1 ? minutes.toString().charAt(1) : minutes.toString().charAt(0);
		const firstSecondsInt = seconds.toString().length !== 1 ? seconds.toString().charAt(0) : 0;
		const secondSecondsInt =
			seconds.toString().length !== 1 ? seconds.toString().charAt(1) : seconds.toString().charAt(0);

		const timers = document.querySelectorAll('p[timer-attribute="timer"]');
		if (!timers) return;

		timers.forEach((board) => {
			board.innerText = `00:${firstMinutesInt}${secondMinutesInt}:${firstSecondsInt}${secondSecondsInt}`;
		});

		if (distance < 0) {
			clearInterval(countdown);
			localStorage.removeItem('lastVisit');
			timers.forEach((timer) => {
				timer.innerText = '00:00:00';
			});
			return;
		}
	}, 1000);
}

countDownTimer();
