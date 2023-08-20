import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { CartWidget } from '../CartWidget/CartWidget'
import logoBeauty from '../../assets/logo6.png'
import './NavBar.css'
import { NavLink, Outlet } from 'react-router-dom'


export const NavBar = () => {
  return <>
    <Navbar className="nav-prin">
      <Container >
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logoBeauty} className="logo" />
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
        {/* <Nav>
          <NavLink to={"/"}> Contacto </NavLink>
        </Nav> */}
        <Navbar.Brand className="justify-content-end" style={{ padding: 0 }}>
          <CartWidget /></Navbar.Brand>
      </Container>
    </Navbar >
    <Outlet />
  </>
}

