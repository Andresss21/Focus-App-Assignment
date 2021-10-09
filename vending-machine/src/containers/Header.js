
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



export const Header = () => {
    return (
        <div>
             <Navbar  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Vending Machine</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Created by: <a >Andres Martinez</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

