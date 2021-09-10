import { useState } from "react";

function Counter() {

    const [number, setnumber] = useState(0);

    /* Increment Function */
    function increment() {
        setnumber(number + 1);
    }

    return(
        <div className="counter">
            <h2>Counter Demo</h2>
            <div className="counter-demo">
                <div className="counter-left">
                    <button onClick={increment}>Increment</button>
                    <button onClick={() => setnumber(number - 1)}>Decrement</button>
                    <button onClick={() => setnumber(0)}>Reset</button>
                </div>
                <div className="counter-right">
                    <h3>{number}</h3>
                </div>
            </div>
        </div>
    )

}

export default Counter;