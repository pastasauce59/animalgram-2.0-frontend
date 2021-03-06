// import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(props) {
    return(
        <>
            {/* <h1>Navbar goes here</h1> */}
            <Navbar fixed='bottom' bg='dark' variant='dark'>
                <Container>
                <Navbar.Brand>๐Animalgram๐ธ</Navbar.Brand>
                    <Nav className='justify-content-center'>
                        <Nav.Link href='/'>๐  Home</Nav.Link>
                        <Nav.Link href='/search'>๐ Search</Nav.Link>
                        <Nav.Link href='/profile'>๐ค Profile</Nav.Link>
                        <Nav.Link href='/post'>๐ Post</Nav.Link>
                        <Nav.Link onClick={ () => {
                            let confirmBox = window.confirm("Log out of Animalgram?")
                                if (confirmBox === true){
                                    props.loginStatus(false)
                                }
                            }
                        }>๐ด Logout</Nav.Link>
                        </Nav>
                </Container>  
            </Navbar>

        </>
    )
}

export default Navigation