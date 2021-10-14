import {ProductLine} from "./ProductLine";
import {Col, NavDropdown} from "react-bootstrap";
import React from "react";


export function ProductCategory(props) {
    const {category} = props;

    return <Col className="block-example border border-dark p-0 m-1">
        <NavDropdown title={category.name} className="variant" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> {category.products.map(p => <ProductLine product={p} key={p.name}/>)}</NavDropdown.Item>
        </NavDropdown>
    </Col>;
}