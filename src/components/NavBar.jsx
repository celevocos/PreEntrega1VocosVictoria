import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CartWidget } from './CartWidget'
import logoBeauty from '../assets/logo6.png'


export const NavBar = () => {
  return <>
    <Navbar bg="warning" data-bs-theme="warning" style={{padding:0}}>
      <Container>
        <Navbar.Brand> <img src={logoBeauty} className="logo" alt="logo1" /> </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Cosmeticos</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Para Cabellos           </NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Cuidado facial y Corporal</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#offers">Ofertas- Promociones</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
         </Nav>
         <Navbar.Brand className="justify-content-end" style={{padding: 0}}>
            <CartWidget /></Navbar.Brand>
      </Container>
    </Navbar>
  </>
}

