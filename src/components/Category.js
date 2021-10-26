import {ProductLine} from "./ProductLine";
import {useState} from "react";
import {Card, CloseButton, Col, Collapse, Row} from "react-bootstrap";

function CategoryHeader(props) {
    const {category, isOpen, setIsOpen} = props;
    return <Row>
        <Col>
            <h3>{category.name}</h3>
        </Col>
        <Col xs={1} md={2}>
            {isOpen && <CloseButton variant="white" onClick={() => setIsOpen(!isOpen)}/>}
        </Col>
    </Row>

}


export function Category(props) {
    const {category} = props;
    const [isOpen, setIsOpen] = useState(true);

    return <Card className="mt-2 h-100">
        <Card.Header className="bg-dark text-white"
                     onClick={() => setIsOpen(!isOpen)}>
            <CategoryHeader category={category} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Card.Header>
        <Collapse in={isOpen}>
            <Card.Body>
                <div>
                    {category.products.map(p => <ProductLine product={p} key={p.name}/>)}
                </div>
            </Card.Body>
        </Collapse>
    </Card>;
}