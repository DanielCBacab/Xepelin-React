import React from "react";
import logo from '../img/logo.svg';
import facebookLogo from '../img/facebookLogo.svg';
import twitterLogo from '../img/twitterLogo.svg';
import linkedinLogo from '../img/linkedinLogo.svg';
import { Col, Container, Row, Nav } from "react-bootstrap";


const Year = new Date().getFullYear();


export function Footer(){
    return (
        <Container fluid className="py-2 py-md-5 footer">
            <Row className="justify-content-center my-5">
                <Col xs={11} md={5}>
                    <Row>
                        <Col sm={12} className="mb-3">
                        <img
                            src={logo}
                            width="85"
                            className="d-inline-block align-top"
                            alt="Xepelin"
                        />
                        </Col>
                        <Col sm={6}>
                            <p className="text-white p-alt">
                            Soñamos con un mercado en donde no existan barreras de entradas para el financiamiento de las pymes en Latinoamérica.  
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={11} md={5}>
                    <Row>
                        <Col xs={6} md={4} className="pt-5 pt-md-0">
                            <p className="text-white">Soluciones</p>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/financiamiento/#financiamientodirecto">Financiamiento directo</Nav.Link>
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/financiamiento/#pronto-pago">Pronto Pago</Nav.Link>
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/financiamiento/#creditos">Crédito de capital</Nav.Link>
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/financiamiento/#confirming">Confirming</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={6} md={4} className="pt-5 pt-md-0">
                            <p className="text-white">Explorar</p>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/sobre-nosotros/#quienes-somos">Sobre nosotros</Nav.Link>
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/recursos/#testimonios">Testimonios</Nav.Link>
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/recursos/#noticias">Noticias</Nav.Link>
                                <Nav.Link className="text-white" href="https://www.xepelin.com/mx/recursos/#blog">Blog</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={12} md={4} className="pt-5 pt-md-0">
                            <Row>
                                <Col sm={12}>
                                    <p className="text-white">Síguenos</p>
                                </Col>
                                <Col xs={2} md={2}>
                                    <a href="https://www.facebook.com/Xepelinofficial/">
                                    <img
                                        src={facebookLogo}
                                        width="24"
                                        className="d-inline-block align-top"
                                        alt="Facebook Link"
                                    />
                                    </a>

                                </Col>
                                <Col xs={2} md={2}>
                                    <a href="https://www.linkedin.com/company/xepelinofficial/">
                                    <img
                                        src={linkedinLogo}
                                        width="24"
                                        className="d-inline-block align-top"
                                        alt="Linkedin Link"
                                    />
                                    </a>

                                </Col>
                                <Col xs={2} md={2}>
                                    <a href="https://twitter.com/xepelinofficial">
                                    <img
                                        src={twitterLogo}
                                        width="24"
                                        className="d-inline-block align-top"
                                        alt="Twitter Link"
                                    />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={10}  className="g-0">
                    <hr/>
                </Col>
            </Row>

            <Row className="justify-content-center text-center">
                <Col className="mb-0 mb-md-5">
                    <p  className="caption">
                       <b>© {Year} Xepelin</b>  Con amor para las pymes
                    </p>
                </Col>
            </Row>
        </Container>
    )
}