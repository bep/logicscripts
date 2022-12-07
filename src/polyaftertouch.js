function HandleMIDI(event) {
	let enableAt = 1;
	event.send();
	if (!enableAt) return;

	if (event instanceof Note) {
		let b = Math.random() < 0.6;
		if (!b) return;
		let velocity = event.velocity;
		let k = 2;
		let n = Math.floor(velocity * 0.5);
		let speed = Math.floor(Math.random() * 50) + 50;
		let wait = Math.floor(Math.random() * 100) + 100;
		let clock = wait;

		for (let i = n; i > 0; i -= k) {
			polyp(event.pitch, i, clock);
			clock += speed;
		}

		clock += wait;

		for (let i = 1; i < n; i += k) {
			polyp(event.pitch, i, clock);
			clock += speed;
		}
	}
}

function polyp(pitch, val, after) {
	val = MIDI.normalizeData(val);

	let at = new PolyPressure();
	at.pitch = pitch;
	at.value = val;
	at.sendAfterMilliseconds(after);
}
