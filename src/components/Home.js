import * as React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Idk from "./Idk";
import Math from "./Math";
import logo from '../logo.svg';

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
                <Math a={9} b={10}/>
                <Idk url={logo} name='Home page'/>
            </main>
            <nav>
                <NavLink to="/">Выйти</NavLink>
            </nav>
        </>
    );
}

export default Home;