# Easing
A collection of animation easing functions in Javascript's ES6 module format. Easing functions specify the rate of change of a parameter over time. Learn more about easing [here](https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing?hl=en).

## Install
Easing is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install Easing with the following command:

```
$ jspm install github:DEGJS/easing
```

## Usage
```js
import { easeInOutCubic } from 'DEGJS/easing';

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
## Browser Support

Easing does not depend on any special browser APIs and should work with all browsers.