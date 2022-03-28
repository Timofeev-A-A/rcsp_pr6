import * as React from "react";
import "../App.css";

function Student(props) {
    return (
        <p>
            Работу выполнил {props.name},<br/>студент группы {props.group}
        </p>
    );
}
export default Student;