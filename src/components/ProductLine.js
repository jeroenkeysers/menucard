import {Col, Row} from "react-bootstrap";

function ProductSize(props) {
    const {product} = props;
    if (!product.size) return null;
    return <span className="productSize"> - {product.size}cl</span>;
}

function ProductNote(props) {
    const {product} = props;
    return <div className="note">{product.note}</div>;
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <Row>
            <Col>{product.name}<ProductSize product={product}/></Col>
            <Col xs={3} md={4} className="text-end">
                {product.price}&euro;
            </Col>
        </Row>
        <Row>
            <Col><ProductNote product={product}/></Col>
        </Row>
    </>;
}