# Build a Simple Web App

Example: A counter app

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="count">0</h1>
  <button id="add">Add</button>

  <script>
    const countEl = document.getElementById("count");
    const btn = document.getElementById("add");
    let count = 0;

    btn.onclick = () => {
      count++;
      countEl.textContent = count;
    };
  </script>
</body>
</html>
```
-   Click the button to increase the count
    
-   This demonstrates DOM manipulation
