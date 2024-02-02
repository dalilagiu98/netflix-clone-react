import NavDropdown from "react-bootstrap/NavDropdown"

const NavbarMain = function () {
    return (
        <nav
        id="tv-nav"
        className="navbar navbar-expand-lg bg-dark position-sticky w-100 z-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h2 id="tv-shows" className="navbar-brand fs-2" href="#">TV Shows</h2>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavDropdown title="Genres" id="nav-dropdown" className="border border-white">
            <NavDropdown.Item eventKey="4.1">Trending Now</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Watch It Again</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">New Releases</NavDropdown.Item>
           
        </NavDropdown> 
          </ul>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex" role="search">
              <button className="btn border rounded-0" type="submit">
                <i className="bi bi-list"></i>
              </button>
              <button className="btn border rounded-0" type="submit">
                <i className="bi bi-grid-fill"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default NavbarMain