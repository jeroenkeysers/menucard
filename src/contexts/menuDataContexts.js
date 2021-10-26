import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {getMenuCardFromDb} from "../services/firestoreMenuCard";

const MenuDataContext = createContext();

export function MenuDataProvider(props) {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        async function load() {
            const menuDataFromDb = await getMenuCardFromDb();
            setMenuData(menuDataFromDb);
        }

        load();
    }, []);
    const api = useMemo(() => ({
        menuData, setMenuData
    }), [menuData, setMenuData]);
    return <MenuDataContext.Provider value={api}>
        {props.children}
    </MenuDataContext.Provider>
}

export const useMenuDataContext = () => useContext(MenuDataContext);
