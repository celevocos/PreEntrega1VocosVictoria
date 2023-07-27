import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { CartWidget } from './CartWidget'
import logoBeauty from '../assets/logo6.png'
import { NavLink , Outlet} from 'react-router-dom'


export const NavBar = () => {
  return <>
    <Navbar bg="warning" data-bs-theme="warning" style={{ padding: 0 }}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logoBeauty} className="logo" alt="logo1" />
          </NavLink>
        </Navbar.Brand>

        <Nav>
          <NavLink to={"/"}> Inicio </NavLink>
        </Nav>
                <Nav>
          <NavLink to={"/category/Maquillaje"}> Maquillaje</NavLink>
        </Nav>
        <NavLink to={"/category/Perfumes"}> Perfumes </NavLink>
        <Nav>
          <NavLink to={"/category/Higiene"}> Higiene </NavLink>
          </Nav>
          <Nav>
          <NavLink to={"/"}> Contact </NavLink>
          </Nav>
        {/*   <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Cosmeticos</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Para Cabellos           </NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Cuidado facial y Corporal</NavDropdown.Item> AGREGAR EL NAVlINK AL DROPDOWN 
          </NavDropdown>
          <NavLink href="#offers">Ofertas- Promociones</NavLink>
          <Nav.Link href="#contact">Contacto</Nav.Link>*/}
    
      <Navbar.Brand className="justify-content-end" style={{ padding: 0 }}>
        <CartWidget /></Navbar.Brand>
    </Container>
  </Navbar >
  <Outlet />
  </>
}

