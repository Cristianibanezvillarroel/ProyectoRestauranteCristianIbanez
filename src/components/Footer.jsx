import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../FooterStyles";

export const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Nosotros</Heading>
                        <FooterLink href="#">Nuestra Historia</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Especialidades</Heading>
                        <FooterLink href="#">Comida Chilena</FooterLink>
                        <FooterLink href="#">Postres</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contactanos</Heading>
                        <FooterLink href="#">Formulario Contacto</FooterLink>
                        <FooterLink href="#">Direccion</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}
