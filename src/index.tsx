import { useState } from "preact/hooks";
import { render } from "preact";

function App() {
    const [value, setValue] = useState(0);

    return (
        <div className="flex w-full h-full flex-col justify-center items-center bg-slate-100">
            <div>Counter: {value}</div>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
        </div>
    )
}

const dom = document.getElementById("smarttheme");

if (dom)
    render(<App />, dom);
