import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Packs from "./packs.component";
import "./Packs.css"
export default class Stats extends Component {
    render() {
        return (
            <Container fluid="true">
                <Card fluid="true" className="Locker" >
                    <Card.Body  >
                        <Card.Title>LOCKER</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Some quick example text to build on the card title and make up the bulk of
                            the card's content. Some quick example text to build on the card title and make up the bulk of
                            the card's content. Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        )
    }
}