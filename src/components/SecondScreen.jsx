import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  CardsContainer  from "./CardsContainer";


export function SecondScreen(){
    return(
        <Container fluid className="my-5 py-5">
            <Row className='justify-content-center'>
                <Col xs={11} md={6}>
                    <h2 className='text-center my-2 shadow-txt black-txt'>¿Cómo lo hacemos realidad?</h2>
                    <h6 className='text-center shadow-txt black-txt'>Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite financiar en el mismo día.</h6>
                </Col>
                <Col xs={11} md={10}>
                    <CardsContainer/>
                </Col>
            </Row>
        </Container>
    )
}