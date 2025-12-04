# JavaScript Modules & Imports

Modules allow you to split code into separate files.

```js
// math.js
export function add(a,b){ return a+b; }

// main.js
import { add } from './math.js';
console.log(add(2,3)); // 5
```
### Notes

-   Use `.js` extension in imports
    
-   Works natively in modern browsers with `type="module"`
