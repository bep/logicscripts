function HandleMIDI(event) {
	if (!(event instanceof ProgramChange)) {
		event.send();
	}
}
