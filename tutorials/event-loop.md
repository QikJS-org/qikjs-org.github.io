# JavaScript Event Loop

JS is single-threaded but asynchronous.

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout finished");
}, 0);

console.log("End");
```
## Output

```powershell
Start
End
Timeout finished
```
## Explanation

-   `setTimeout` callbacks go to the event queue
    
-   JS continues running main code
    
-   Queue events are executed after main thread
