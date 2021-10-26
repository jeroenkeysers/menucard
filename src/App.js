import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {Container} from "react-bootstrap";
import {MenuNavbar} from "./components/MenuNavbar";
import {MenuCard} from "./components/MenuCard";
import "./services/firestore";
import {MenuDataProvider, useMenuDataContext} from "./contexts/menuDataContexts";



function ProvidedApp() {
    return <Container fluid className="p-0 p-md-3 p-lg-5">
        <MenuNavbar/>
        <MenuCard/>
    </Container>;
}

function App() {
    return <MenuDataProvider>
        <ProvidedApp/>
    </MenuDataProvider>;
}

export default App;