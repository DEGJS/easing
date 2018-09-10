# Easing
[![Build Status](https://travis-ci.org/DEGJS/easing.svg?branch=master)](https://travis-ci.org/DEGJS/easing)

A collection of animation easing functions in Javascript's ES6 module format. Easing functions specify the rate of change of a parameter over time. Learn more about easing [here](https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing?hl=en).

## Install
Easing is an ES module. If your runtime environment does not support ES modules, you'll need a transpiler ([Babel](https://babeljs.io) is a nice one).

If you're using NPM, you can install Easing with the following command:

```
$ npm install @degjs/easing
```

## Usage
```js
import { easeInOutCubic } from '@degjs/easing';

// animate a value from 100 to 300 with ease-in-out easing over the course of 1 second
let currentIteration = 0,
	totalIterations = 60,
	startValue = 100,
	changeInValue = 200,
	easedValue;

window.requestAnimationFrame(onAnimationFrame);

function onAnimationFrame() {
	if(currentIteration < totalIterations) {
		currentIteration++;
		easedValue = easeInOutCubic(currentIteration, startValue, changeInValue, totalIterations);
	}
}

```

## Methods
All methods take the same four parameters, defined below:
#### currentIteration
Type: `Number`   
The current iteration. Think of this in terms of animation frames or seconds/milliseconds.

#### startValue
Type: `Number`
The start value. This is the initial state of the value that will be animated.

#### changeInValue
Type: `Number`
The amount of change in the value over the duration of the animation.

#### totalIterations
The duration of the animation. Think of this in terms of animation frames or seconds/milliseconds.

### .linear(currentIteration, startValue, changeInValue, totalIterations)
A linear rate of change with no easing.
### .easeOutCubic(currentIteration, startValue, changeInValue, totalIterations)
Starts quickly and ends slowly.
### .easeInCubic(currentIteration, startValue, changeInValue, totalIterations)
Starts slowly and ends quickly.
### .easeInOutCubic(currentIteration, startValue, changeInValue, totalIterations)
Starts and ends slowly. 