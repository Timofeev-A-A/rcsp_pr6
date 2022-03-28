import * as React from "react";
import "../App.css";

function Idk(props) {
    return (
        <div className="App">
            <img src={props.url} className="App-logo" alt={props.name}/>
        </div>
    )
}

export default Idk;