import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiChevronRight } from '@mdi/js'; 
import { TopNav } from "./TopNav";
import circleGradient from '../img/circleGradient.svg';
import circleGradient2 from '../img/circleGradient2.svg';
import coin from '../img/coin.svg';
import coin2 from '../img/coin2.svg';
import square1 from '../img/square1.png';
import square2 from '../img/square2.svg';
import square3 from '../img/square3.svg';
import peopleStar from '../img/peoplestar.png';




export function TopBanner(){
    return(
        <Container fluid className="g-0 topBanner">
            <Row className="vh-100 w-100 position-absolute">
                <Col xs={10}>
                    <img src={circleGradient}  className="circle-gradient"/>
                    <img src={circleGradient2}  className="circle-gradient2"/>
                    <img src={coin} className="coin"/>
                    <img src={coin2} className="coin2"/>
                    <img src={square1} className="square1"/>
                    <img src={square2} className="square2"/>
                    <img src={square3} className="square3"/>
                    <img src={peopleStar} className="peoplestar d-none d-md-flex"/>
                </Col>
            </Row>
            <TopNav/>     
            <Row className="vh-100 w-100 justify-content-center align-content-center">
                <Col xs={10} md={4}>
                    <h1 className="mb-4 text-white">Financia el sueño de tu empresa</h1>
                    <h6 className="mb-4 text-white">
                        Nuestro modelo de riesgos evalúa en segundos una operación,<br/>lo que nos permite financiar en el mismo día.  
                    </h6>
                    
                    <ButtonGroup className="me-2" aria-label="Second group" size="lg">
                        <Button>Empieza a financiarte                             
                            <Icon path={mdiChevronRight}
                            size={1}
                            color="white"
                            
                           />
                        </Button> 

                    </ButtonGroup>
                </Col>
                <Col lg="5">
                </Col>
            </Row>
        </Container>
    )
}