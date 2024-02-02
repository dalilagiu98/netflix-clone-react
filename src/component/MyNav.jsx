import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNav = function() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
       <img src='logo.png' alt='logo netflix' style={{width: "6em"}}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#newest">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#search"><i className="bi bi-search"></i></Nav.Link>
            <Nav.Link href="#deets"><img src='kids_icon.png' alt='kids-icon'style={{width: "2.4em"}}/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <NavDropdown title={<img src='avatar.png' alt='avatar-logo' style={{width: "2.4em"}}/>} id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">Impostation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNav 