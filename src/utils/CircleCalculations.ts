function chordLengthFunction(R: number, dtop: number): number {
	return 2 * Math.sqrt(R ** 2 - (R - dtop) ** 2);
}

export function findRadius(L: number, dTop: number): number {
	let lowerBound = dTop;
	let upperBound = 10000;

	const maxIter = 1000;
	const tol = 5;

	for (let i = 0; i < maxIter; i++) {
		let midPoint = (lowerBound + upperBound) / 2;
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

	return 0;
}
