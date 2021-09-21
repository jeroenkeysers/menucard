import './App.css';
import {ProductLine} from "./components/ProductLine";
import {PRODUCTS_DATA} from "./data/data";

function App() {
    return (<div className="App">
        <h1>Menu</h1>
        {PRODUCTS_DATA.map(p => <ProductLine product={p} key={p.name}/>)}
    </div>);
}

export default App;
