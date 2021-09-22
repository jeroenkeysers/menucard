import './App.css';
import {ProductLine} from "./components/ProductLine";
import {CATEGORIES_DATA, PRODUCTS_DATA} from "./data/data";
import {ProductCategory} from "./components/ProductCategory";

function App() {
    return (<div className="App">
        <h1>Menu</h1>
        {CATEGORIES_DATA.map(c => <ProductCategory category={c} key={c.name}/>)}
        {PRODUCTS_DATA.map(p => <ProductLine product={p} key={p.name}/>)}
    </div>);
}

export default App;
