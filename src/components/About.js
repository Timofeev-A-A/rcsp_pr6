import * as React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Student from "./Student";
import Idk from "./Idk";
import Math from "./Math";

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
                <Math a={10} b={9}/>
                <Idk name='About spinning'/>
                <Student name='Тимофеев Александр' group='ИКБО-20-19' />
            </main>
            <nav>
                <NavLink to="/">Выйти</NavLink>
            </nav>
        </>
    );
}

export default About;