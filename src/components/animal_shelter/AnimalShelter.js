import React, { Component } from "react";
import axio from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
  CardDeck,
} from "reactstrap";

class AnimalShelter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col>
          <Card className="mb-3">
            <CardImg
              top
              width="100%"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Name:{this.props.shelter.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Phone No : {this.props.shelter.phone}
              </CardSubtitle>
              <CardText>Address : {this.props.shelter.address}</CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}
export default AnimalShelter;
