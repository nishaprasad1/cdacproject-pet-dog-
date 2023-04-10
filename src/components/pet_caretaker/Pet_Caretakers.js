import React, { Component } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
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
} from "reactstrap";

class Pet_Caretakers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <>
      //   <div className="container">
      //     <div class=" row">
      //       <Card style={{ width: "18rem" }}>
      //         <Card.Img
      //           variant="top"
      //           src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/kittens-in-shelter-69469.jpg?h=ece64c50&itok=tOiKeqHY"
      //         />
      //         <Card.Body>
      //           <Card.Title>Care Taker:{this.props.takers.name}</Card.Title>
      //           <Card.Title>CareTaker Center:{this.props.takers.center_name}</Card.Title>
      //           <Card.Text>
      //             <b>Address : {this.props.takers.address}</b>
      //           </Card.Text>
      //           <b>Phone No : {this.props.takers.phone_no}</b>
      //         </Card.Body>
      //       </Card>
      //     </div>
      //   </div>
      // </>
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
              <CardTitle tag="h5">
                Care Taker:{this.props.takers.name}
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                CareTaker Center:{this.props.takers.center_name}
              </CardSubtitle>
              <CardText>Address : {this.props.takers.address}</CardText>
              <CardText>Phone No : {this.props.takers.phone_no}</CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}
export default Pet_Caretakers;
