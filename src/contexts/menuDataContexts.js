import React, {createContext, useContext, useMemo, useState} from 'react';

const MenuDataContext = createContext();

export function MenuDataProvider(props) {
    const [menuData, setMenuData] = useState([]);
    const api = useMemo(() => ({
        menuData, setMenuData
    }), [menuData, setMenuData]);
    return <MenuDataContext.Provider value={api}>
        {props.children}
    </MenuDataContext.Provider>
}

export const useMenuDataContext = () => useContext(MenuDataContext);
