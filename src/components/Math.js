import * as React from "react";
import "../App.css";

function Math(props) {
    return (
        <p>What's {props.a} plus {props.b}? {sum(props.a, props.b)}</p>
    )
}

function sum(a, b) {
    if (a===9 && b===10) return 21;
    return a+b;
}

export default Math;