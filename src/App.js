import './App.css';
import {CATEGORIES_DATA} from "./data/data";
import {ProductCategory} from "./components/ProductCategory";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

function App() {
    return (<Container className="App">
        <h1 className="HeadTitle">Menu</h1>
        <Row> {CATEGORIES_DATA.map(c => <ProductCategory category={c} key={c.name}/>)}</Row>
    </Container>);
}

export default App;
