# Easing
Javascript animation easing functions.

## Sample Usage
``` javascript
import { easeInOutCubic } from "DEGJS/easing";

...

let value = easeInOutCubic(0, 0, 10, 10);

```

## Available Methods
* linear(currentIteration, startValue, changeInValue, totalIterations)
* easeInOutCubic(currentIteration, startValue, changeInValue, totalIterations)
* easeOutCubic(currentIteration, startValue, changeInValue, totalIterations)
* easeInCubic(currentIteration, startValue, changeInValue, totalIterations)

## Revision History
* **1.0.0:** First commit.