import * as React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import {AuthForm} from "../components/AuthForm";

function Routs() {
    return (
        <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="user" element={<Home />} />
            <Route path="admin" element={<About />} />
        </Routes>
    )
}
export default Routs;