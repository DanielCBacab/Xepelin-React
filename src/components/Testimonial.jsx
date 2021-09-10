import React from "react";
import { Col, Container, Row, Tab, Nav, Button, ButtonGroup } from "react-bootstrap";
import { mdiStar } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import Icon from "@mdi/react"; 

import Avatar1 from "../img/avatar-1.png";
import Avatar2 from "../img/avatar-2.png";
import Avatar3 from "../img/avatar-3.png";

export function Testimonial(){
    return (
        <Container fluid className="testimonial-bg py-5">
            <Row className="justify-content-center my-2 my-md-5 text-center black-txt">
                <Col xs={11} md={6} className="mt-5">
                    <h2>
                        ¿Qué dicen nuestros clientes?
                    </h2>
                    <h6>
                        La Fintech chilena especializada en servicios financieros para pequeñas y medianas empresas en Latinoamérica.
                    </h6>
                </Col>
            </Row>
            <Row className="justify-content-center pt-0 pb-5 py-md-5">
            <Col sm={11} md={9}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="justify-content-between py-5">
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item className="my-2 my-md-3">
                                        <Nav.Link eventKey="first">
                                            <Row className="justify-content-md-center align-content-center align-items-center p-2 p-md-3 rounded-4">
                                                <Col xs={3} md={3}>
                                                    <img src={Avatar1} className="img-fluid"/>
                                                </Col>
                                                <Col xs={7} md={9}>
                                                    <h5>Andrés Rosales</h5>
                                                    <small>Gerente general de Sacer Spa</small>
                                                </Col>
                                            
                                            
                                            <Row className="d-md-none justify-content-between align-content-center align-items-center pt-4">
                                                <Col xs={10} className="black-txt">
                                                        <p className="p-0 m-0">
                                                            <strong>La mejor experiencia</strong>
                                                        </p>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                </Col>
                                                <Col xs={2}>
                                                <ButtonGroup 
                                                    aria-label="Second group" 
                                                    >
                                                    <Button variant="warning" className="icon"> 
                                                            <Icon path={mdiChevronRight}
                                                            size={1}
                                                            horizontal
                                                            vertical
                                                            rotate={180}
                                                            color="white"/>
                                                            
                                                            </Button> 
                                                    </ButtonGroup>
                                                </Col>
                                                </Row>

                                            </Row>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="my-2 my-md-3">
                                    <Nav.Link eventKey="second">
                                            <Row className="justify-content-md-center align-content-center align-items-center p-2 p-md-3 rounded-4">
                                            <Col xs={3} md={3}>
                                                    <img src={Avatar2} className="img-fluid"/>
                                                </Col>
                                                <Col xs={7} md={9}>
                                                    <h5>Carlos Zapata</h5>
                                                    <small>Gerente genera de Zapata Ltda</small>
                                                </Col>
                                                                                            
                                                <Row className="d-md-none justify-content-between align-content-center align-items-center pt-4">
                                                <Col xs={10} className="black-txt">
                                                        <p className="p-0 m-0">
                                                            <strong>Zapata y Zapata Ltda.</strong>
                                                        </p>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                </Col>
                                                <Col xs={2}>
                                                <ButtonGroup 
                                                    aria-label="Second group" 
                                                    >
                                                    <Button variant="warning" className="icon"> 
                                                            <Icon path={mdiChevronRight}
                                                            size={1}
                                                            horizontal
                                                            vertical
                                                            rotate={180}
                                                            color="white"/>
                                                            
                                                            </Button> 
                                                    </ButtonGroup>
                                                </Col>
                                                </Row>
                                            </Row>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="my-2 my-md-3">
                                    <Nav.Link eventKey="third">
                                         <Row className="justify-content-md-center align-content-center align-items-center p-2 p-md-3 rounded-4">
                                            <Col xs={3} md={3}>
                                                    <img src={Avatar3} className="img-fluid"/>
                                                </Col>
                                                <Col xs={7} md={9}>
                                                    <h5>Leonardo Moncaba</h5>
                                                    <small>Ing. y Montajes Cerro Bramador Spa</small>
                                                </Col>
                                                <Row className="d-md-none justify-content-between align-content-center align-items-center pt-4">
                                                <Col xs={10} className="black-txt">
                                                        <p className="p-0 m-0">
                                                            <strong>La virtud de ser persistentes.</strong>
                                                        </p>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                        <Icon path={mdiStar}
                                                        size={1}
                                                        color="orange"/>
                                                </Col>
                                                <Col xs={2}>
                                                <ButtonGroup 
                                                    aria-label="Second group" 
                                                    >
                                                    <Button variant="warning" className="icon"> 
                                                            <Icon path={mdiChevronRight}
                                                            size={1}
                                                            horizontal
                                                            vertical
                                                            rotate={180}
                                                            color="white"/>
                                                            
                                                            </Button> 
                                                    </ButtonGroup>
                                                </Col>
                                                </Row>
                                            </Row>  
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={7} className="d-none d-md-flex">
                            <Tab.Content >
                                <Tab.Pane eventKey="first" className="black-txt">
                                    <Col sm={10}>
                                        <h3>La mejor experiencia</h3>
                                    </Col>
                                    <Col className="mb-4  black-txt">
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    </Col>
                                    <Col>
                                    <p>
                                    “En un principio habíamos pensado en acudir a algún banco, pero el problema es que necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por eso también estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permitió pagar sueldos, cotizaciones e impuestos al día, además de comprar materiales.”
                                    </p>
                                    <p>
                                    Con tan solo 7 meses de funcionamiento a toda máquina, la empresa de soluciones de acero SACER ha sabido cómo lidiar con las dificultades que conlleva el emprender con un negocio de manera autónoma."
                                    </p>
                                    </Col>
                                    <Col className="mt-5">
                                    <ButtonGroup 
                                    className="me-2" 
                                    aria-label="Second group" 
                                    >
                                        <Button variant="warning">Empieza a financiarte</Button> 
                                        <Button variant="warning" className="icon"> 
                                            <Icon path={mdiChevronRight}
                                            size={1}
                                            horizontal
                                            vertical
                                            rotate={180}
                                            color="white"/>
                                            
                                            </Button> 
                                    </ButtonGroup>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"  className="black-txt">
                                <Col sm={10}>
                                        <h3>Zapata y Zapata Ltda.</h3>
                                    </Col>
                                    <Col className="mb-4">
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    </Col>
                                    <Col>
                                    <p>
                                    “Son siete años y tres intentos de emprender los que ayudaron a la empresa Atacameña, Cerro Bramador a ser lo que son hoy.
                                    </p>
                                    <p>
                                    Con gran experiencia en el sector minero e industrial y especializados principalmente en la construcción de estructuras mecánicas y en pipping, apuntan a ser una empresa líder en la región y reconocida a nivel nacional por su calidad y compromiso."
                                    </p>                                     
                                    </Col>
                                    <Col className="mt-5">
                                    <ButtonGroup 
                                    className="me-2" 
                                    aria-label="Second group" 
                                    >
                                        <Button variant="warning">
                                            Empieza a financiarte</Button> 
                                        <Button variant="warning" className="icon"> 
                                            <Icon path={mdiChevronRight}
                                            size={1}
                                            horizontal
                                            vertical
                                            rotate={180}
                                            color="white"/>
                                            </Button> 
                                    </ButtonGroup>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="black-txt">
                                <Col sm={10}>
                                        <h3>La virtud de ser persistentes.</h3>
                                    </Col>
                                    <Col className="mb-4">
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    <Icon path={mdiStar}
                                    size={1}
                                    color="orange"/>
                                    </Col>
                                    <Col>
                                    <p>
                                    “Nunca habíamos trabajado con alternativas de financiamiento, y al principio operamos con Xepelin porque nuestros clientes, debido a la contingencia, comenzaron a atrasarse en los pagos. Iba a ser algo de una sola vez, pero quedamos muy contentos con el servicio que nos prestaron, las operaciones fueron rápidas, las instrucciones super claras, y nos ayudaron bastante. Ahora cada factura que nos llega la enviamos a Xepelin.” 
                                    </p>                                      
                                    </Col>
                                    <Col className="mt-5">
                                    <ButtonGroup 
                                    className="me-2" 
                                    aria-label="Second group" 
                                    >
                                        <Button variant="warning">Empieza a financiarte</Button> 
                                        <Button variant="warning" className="icon"> 
                                            <Icon path={mdiChevronRight}
                                            size={1}
                                            horizontal
                                            vertical
                                            rotate={180}
                                            color="white"/>
                                            </Button> 
                                    </ButtonGroup>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col> 
            </Row>    
        </Container>

    )
}