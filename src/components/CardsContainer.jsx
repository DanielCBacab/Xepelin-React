import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { mdiChevronRight } from '@mdi/js'; 
import Icon from "@mdi/react";

export default function CardsContainer(){

    return (
        <Row className='my-5 justify-content-center'>   
             <Col sm={10} md={3}>
                <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px180" className="image-card card-1"/>
                <Card.Body className="mb-5">   
                    <Card.Title className="shadow-txt black-txt">     
                        Financiamiento Directo
                    </Card.Title>
                    <Card.Text className="shadow-txt black-txt">
                    Pensado en empresas que necesiten financiar sus cuentas por cobrar o una alternativa al factoring. 
                    </Card.Text>
                    <Button variant="link">Explorar  
                    <Icon path={mdiChevronRight}
                                size={1}
                                horizontal
                                vertical
                                rotate={180}
                                />
                    </Button>
                </Card.Body>
                </Card>
            </Col>

            <Col sm={10} md={3}>
                <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px180" className="image-card card-2"/>
                <Card.Body className="mb-5">   
                <Card.Title className="shadow-txt black-txt">     
                    Pronto Pago
                </Card.Title>
                <Card.Text className="shadow-txt black-txt">
                Similar al Financiamiento Directo pero sin retención, sin costos adicionales por mora y por el 100% de tu factura.
                </Card.Text>
                <Button variant="link">Explorar  
                <Icon path={mdiChevronRight}
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            />
                </Button>
                </Card.Body>
                </Card>
            </Col>

            <Col sm={10} md={3}>
                <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px180" className="image-card card-3"/>
                <Card.Body className="mb-5">   
                <Card.Title className="shadow-txt black-txt">     
                    Crédito de capital
                </Card.Title>
                <Card.Text className="shadow-txt black-txt">
                Para aquellos que buscan potenciar su negocio financiando ordenes de compra o inversión en crecimiento. 
                </Card.Text>
                <Button variant="link">Explorar  
                <Icon path={mdiChevronRight}
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            />
                </Button>
                </Card.Body>
                </Card>
            </Col>

            <Col sm={10} md={3}>
                <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px180" className="image-card card-4"/>
                <Card.Body className="mb-5">   
                    <Card.Title className="shadow-txt black-txt">     
                    Confirming
                    </Card.Title>
                    <Card.Text className="shadow-txt black-txt">
                    Pensado para Grandes Empresas y Corporativos que necesiten extender el plazo de sus cuentas por pagar.
                    </Card.Text>
                    <Button variant="link">Explorar  
                    <Icon path={mdiChevronRight}
                                size={1}
                                horizontal
                                vertical
                                rotate={180}
                                />
                    </Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
    
}