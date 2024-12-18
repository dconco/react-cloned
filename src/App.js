import { useState } from '/lib/react.js'

export default function App(render) {
   const [count, setCount] = useState(0)

   setInterval(() => setCount(s => s+3), 1000);
   render(`<h1>Count ${count}</h1>`);
}