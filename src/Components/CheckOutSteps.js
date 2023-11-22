import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckOutSteps(props) {
  return(  <Row className="checkout-steps">
        <Col className={props.step1 ? 'active':''}  > Signin</Col>
        <Col className={props.step2 ? 'active':''}  > Shipping</Col>
        <Col className={props.step3 ? 'active':''}  > payment </Col>
        <Col className={props.step4 ? 'active':''}  > place order</Col>

    </Row>
  )
  
}   
