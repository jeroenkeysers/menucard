import React from "react";
import {Col, Row} from "react-bootstrap";
import {Category} from "./Category";
import {useMenuDataContext} from "../contexts/menuDataContexts";

export function MenuCard(props) {
    const {menuData} = useMenuDataContext();
    return <>
        <Row className="m-0 mt-4 menu-h1"><h1> Menu</h1></Row>
        <Row className="m-0">
            {menuData.map(c => <Col xs={12} md={6} lg={4}
                                    className="p-0 p-md-1"
                                    key={c.name}>
                <Category category={c}/>
            </Col>)}
        </Row>
    </>;
}