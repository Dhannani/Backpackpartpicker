import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Glyphicon from "react-bootstrap/Glyphicon"
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import StatsCard from "./Stats.component"
import Locker from "./Locker.component"
import Category from "./Category.component"
import "./Packs.css"

import { LayoutSidebar } from 'react-bootstrap-icons';


export default class Packs extends Component {

    constructor(props) {
        super(props)

        this.changeLockerState = this.changeLockerState.bind(this);
        this.addCategory = this.addCategory.bind(this);
        // const list = ;
        this.state = {
            locker: false,
            categories: ["Backpack", "Shelter", "Sleep System"]
        }
    }

    changeLockerState() {
        if (this.state.locker) {
            this.setState({ locker: false })
        }
        else {
            this.setState({ locker: true })
        }
    }

    addCategory() {
        var list = this.state.categories.concat("test");
        this.setState({ categories: list })
    }


    render() {
        return (
            <div>


                <Container className="packsContainer" fluid='true' >
                    <Row fluid='true'>

                        {this.state.locker &&
                            <Col sm={2} md={2} lg={2}>
                                <Locker />
                            </Col>}
                        {!this.state.locker && <Col sm={1} md={1} lg={1}> <div></div></Col>}
                        <Col sm={10} md={10} lg={10}>
                            <Row>
                                <Col sm={1} md={1} lg={1}>
                                    <Button onClick={this.changeLockerState} sm={1} md={1} lg={1} variant="light "><LayoutSidebar /></Button>
                                </Col >
                                <Col sm={10} md={10} lg={10}>
                                    <StatsCard />
                                </Col>
                            </Row>
                            {this.state.categories.map((category, index) =>
                                <div>
                                    <Category title={category} categories={this.state.categories} />
                                </div>)}
                            <Button onClick={this.addCategory}></Button>


                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}