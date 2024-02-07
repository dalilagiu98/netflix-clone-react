import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

const MyNav = function() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
       <img src='\logo.png' alt='logo netflix' style={{width: "6em"}}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/tv-shows">TV Shows</Link>
            <Link className='nav-link' to="/">Movies</Link>
            <Link className='nav-link' to="/">Recently Added</Link>
            <Link className='nav-link' to="/">My List</Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#search"><i className="bi bi-search"></i></Nav.Link>
            <Nav.Link href="#deets"><img src='kids_icon.png' alt='kids-icon'style={{width: "2.4em"}}/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <NavDropdown className='dropleft' title={<img src='avatar.png' alt='avatar-logo' style={{width: "2.4em"}}/>} id="nav-dropdown">
              <Link className='dropdown-item' to="/user">
                  Edit Profile
              </Link>
              <NavDropdown.Divider />
              <Link className='dropdown-item' to="/settings">
                  Settings
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNav 