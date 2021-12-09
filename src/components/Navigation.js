// import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return(
        <>
            {/* <h1>Navbar goes here</h1> */}
            <Navbar fixed='bottom' bg='dark' variant='dark'>
                <Container>
                <Navbar.Brand>🐕Animalgram📸</Navbar.Brand>
                    <Nav className='justify-content-center'>
                        <Nav.Link href='/'>🏠 Home</Nav.Link>
                        <Nav.Link href='/search'>🔎 Search</Nav.Link>
                        <Nav.Link href='/profile'>👤 Profile</Nav.Link>
                        <Nav.Link href='/post'>🆕 Post</Nav.Link>
                    </Nav>
                </Container>  
            </Navbar>

        </>
    )
}

export default Navigation