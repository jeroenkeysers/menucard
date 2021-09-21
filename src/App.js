import './App.css';
import {ProductLine} from "./components/ProductLine";
import {PRODUCTS_DATA} from "./data/data";

function App() {
    return (<div className="App">
        <div>
            <h1>Menu</h1>
            <ProductLine product={PRODUCTS_DATA[0]}/>
            <ProductLine product={PRODUCTS_DATA[1]}/>
            <ProductLine product={PRODUCTS_DATA[2]}/>
            <ProductLine product={PRODUCTS_DATA[3]}/>
        </div>
    </div>);
}

export default App;
