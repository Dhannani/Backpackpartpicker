import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Grid, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import StatsCard from "./Stats.component"
import Locker from "./Locker.component"
import Category from "./Category.component"
import "./Packs.css"

export default class Packs extends Component {

    constructor(props){
        super(props)
        this.state = {locker: true}
    }

    render() {
        return (              
                <Container fluid='true' >
                    <Row fluid='true'>
                    {this.state.locker &&
                        <Col fluid='true' sm={2} md={2} lg={2}>  
                        <Locker />
                        </Col>}
                        {!this.state.locker && <Col fluid='true' sm={1} md={1} lg={1}></Col>}
                        <Col sm={10} md={10} lg={10}>
                            <Container>
                        <Button className="glyphicon glyphicon-menu-hamburger" sm={1} md={1} lg={1}>Some Text</Button>
                        <StatsCard />
                        <Category title= "Backpack"/>
                        <Category title= "Shelter"/>
                        <Category title= "Sleep System"/>
                        </Container>
                        </Col>
                    </Row>
                </Container>

        )
    }
}