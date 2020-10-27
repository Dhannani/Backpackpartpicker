import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Stats from "./Stats.component"



export default class Category extends Component {

    constructor(props) {
        super(props)
        // Setting up state
        this.state = {
          sample:"sample"
        }
      }

    render() {
        return (
            <div>
                <Card className="SubCategoryCard">
                    <Card.Body>
                        <Card.Text>{this.props.title}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}