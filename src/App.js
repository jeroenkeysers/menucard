import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {MenuNavbar} from "./components/MenuNavbar";
import {MenuCard} from "./components/MenuCard";
import "./services/firestore";
import {getMenuCardFromDb} from "./services/firestoreMenuCard";
import {MenuDataProvider, useMenuDataContext} from "./contexts/menuDataContexts";



function ProvidedApp() {
    const {menuData, setMenuData} = useMenuDataContext();

    useEffect(() => {
        async function load() {
            const menuDataFromDb = await getMenuCardFromDb();
            setMenuData(menuDataFromDb);
        }

        load();
    }, []);

    console.log({menuData});

    return <Container fluid className="p-0 p-md-3 p-lg-5">
        <MenuNavbar/>
        <MenuCard menuData={menuData}/>
    </Container>;
}

function App() {
    return <MenuDataProvider>
        <ProvidedApp/>
    </MenuDataProvider>;
}

export default App;