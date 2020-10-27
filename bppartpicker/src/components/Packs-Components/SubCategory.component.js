import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Stats from "./Stats.component"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";



export default class Category extends Component {

    constructor(props) {
        super(props)
        // Setting up state
        this.state = {
            sample: "sample",
            selected: "Select Category"
        }
    }

    displaySelect(item){
        this.setState({selected:item});
    }

    render() {
        return (
            <div>
                {this.props.SubCats &&
                    <div>
                        <Card>
                                <Card.Body>
                                    <Card.Text>{this.state.selected}</Card.Text>
                                    <DropdownButton id="dropdown-basic-button" title={this.state.selected}>
                                        {this.props.SubCats.map((subcategory, index) =>
                                            <div>
                                                <Dropdown.Item onSelect={() => this.displaySelect(subcategory)}>{subcategory}</Dropdown.Item>
                                            </div>
                                        )}
                                    </DropdownButton>
                                </Card.Body>
                         </Card>

                    </div>}
            </div>

        )
    }
}