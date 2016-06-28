export function linear(currentIteration, startValue, changeInValue, totalIterations) {
	return changeInValue * currentIteration / totalIterations + startValue;
}

export function easeInOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return changeInValue / 2 * Math.pow(currentIteration, 3) + startValue;
	}
	return changeInValue / 2 * (Math.pow(currentIteration - 2, 3) + 2) + startValue;
}

export function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
	return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
}

export function	easeInCubic(currentIteration, startValue, changeInValue, totalIterations) {
	return changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue;
}