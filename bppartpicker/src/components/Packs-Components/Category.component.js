import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SubCat from "./SubCategory.component"



export default class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sample: "Select Category"
        }
    }

    displaySelect(item){
        this.setState({sample:item});
    }

    render() {
        return (
            <div >
                <Card className="CategoryCard">
                    <Card.Body>
                        <DropdownButton id="dropdown-basic-button" title={this.state.sample}>
                            {this.props.categories.map((category, index) =>
                                <div>
                                    <Dropdown.Item onSelect={() => this.displaySelect(category)}>{category}</Dropdown.Item>
                                </div>
                            )}
                        </DropdownButton>
                        <Card.Text></Card.Text>
                        <SubCat title="subcategory" />
                    </Card.Body>
                </Card>
            </div>

        )
    }
}