import {Navbar} from "react-bootstrap";
import React from "react";

export function MenuNavbar() {
    return <>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand className="p-2">Ons cafe</Navbar.Brand>
        </Navbar>
        <div style={{height: "4em"}}/>
    </>;
}