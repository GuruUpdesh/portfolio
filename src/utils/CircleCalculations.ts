function chordLengthFunction(R: number, dtop: number): number {
	return 2 * Math.sqrt(R ** 2 - (R - dtop) ** 2);
}

export function findRadius(L: number, dTop: number): number {
	let lowerBound = dTop;
	let upperBound = 10000;

	const maxIter = 1000;
	const tol = 5;
	let midPoint = 0;

	for (let i = 0; i < maxIter; i++) {
		midPoint = (lowerBound + upperBound) / 2;
		let curLength = chordLengthFunction(midPoint, dTop);

		if (Math.abs(curLength - L) < tol) {
			return midPoint;
		}

		if (curLength - L < 0) {
			lowerBound = midPoint;
		} else {
			upperBound = midPoint;
		}
	}

	console.warn(
		"Dynamic Circle failed to calculate radius\nL:",
		L,
		"d_top:",
		dTop,
		"\nmidPoint:",
		midPoint
	);
	return midPoint;
}
