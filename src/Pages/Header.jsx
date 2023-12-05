import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    
  return (
    <div style={{backgroundColor:"#ffffcc"}} >
        <Navbar expand="lg" className="" >
      <Container>
        <Navbar.Brand >
          {/* css animation somke */}
          <ul>
              <li>B</li>
              <li>o</li>
              <li>o</li>
              <li>k</li>
              <li>-</li>
              <li>H</li>
              <li>u</li>
              <li>b</li>
              
          </ul>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='me-5' id="basic-navbar-nav">
          <Nav className="ms-auto  me-3">
            <Nav.Link href="" style={{color:"black",fontSize:"20px"}} className='me-4 '><Link to={'/'} style={{textDecoration:"none" ,color:"black"}}>Home </Link></Nav.Link>
              
                 <Nav.Link href="" style={{color:"black",fontSize:"20px"}} className='me-4'><Link  to={'/bookselling'} style={{textDecoration:"none" ,color:"black"}}>Selling Book</Link></Nav.Link>
                          
            <div className='me-4'>
                <NavDropdown title="Shops" className='NavDrphead' id="basic-nav-dropdown">
                  <NavDropdown.Item href="" className='navitem'>shope list</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'> shope Cart</NavDropdown.Item>
                  <NavDropdown.Item href=""className='navitem'>single product</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'> shope my Acount </NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'> shope oder Traking </NavDropdown.Item>

                </NavDropdown>
            </div>
            <div className='me-4'>
                <NavDropdown title="Categories" className='NavDrphead' id="basic-nav-dropdown">
                  <NavDropdown.Item href="" className='navitem' >Action</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'>Another action</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'>Something</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'> Separated link </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className='me-4'>
                <NavDropdown title="Blog" className='NavDrphead' id="basic-nav-dropdown" >
                  <NavDropdown.Item href="" className='navitem'>Blog-1</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'>Bol-2</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'>Blog-2.1</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem'> Blog-.. </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className='me-4'>
                <NavDropdown  title="Pages" className='NavDrphead  ' id="basic-nav-dropdown" >
                  <NavDropdown.Item href="" className='navitem '>pages-1</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem '>pages-2</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem '>pages-2.1</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem '>pages-2.2</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem '>pages-2.3</NavDropdown.Item>
                  <NavDropdown.Item href="" className='navitem '>pages-2.5</NavDropdown.Item>

                  <NavDropdown.Item href="" className='navitem '> pages-.. </NavDropdown.Item>
                </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header