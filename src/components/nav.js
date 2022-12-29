import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// make name bigger without having nav bar itself bigger, reduce font size of nav
const nav = () => {
  // a lot of weird stuff in here, compare to https://react-bootstrap.github.io/components/navbar/
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand style={{ padding: 0, paddingLeft: "3%", color: "#FFFFFF", fontSize: "3em" }} href="/" >Fight Opera</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse" style={{ paddingRight: "3%" }} variant="success">

        <Nav className="justify-content-end" style={{ width: "100%" }}>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}> Home</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/shows' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}> Shows&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/wrestlers' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}> Wrestlers&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/about' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}>About&nbsp;</NavLink>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default nav