import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const nav = () => {
  // a lot of weird stuff in here, compare to https://react-bootstrap.github.io/components/navbar/
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand style={{ padding: 0, paddingLeft: "3%", color: "#FFFFFF", fontSize: "3.4em" }} href="/fightopera" >Fight Opera</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse" style={{ paddingRight: "3%" }} variant="success">

        <Nav className="justify-content-end" style={{ width: "100%" }}>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/fightopera/shows' style={({ isActive }) => ({
            color: isActive ? '#DC143C' : '#1D253F', fontSize: '2em'
          })}> Shows&nbsp;</NavLink>

<NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/fightopera/merch' style={({ isActive }) => ({
            color: isActive ? '#DC143C' : '#1D253F', fontSize: '2em'
          })}> Merch&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/fightopera/roster' style={({ isActive }) => ({
            color: isActive ? '#DC143C' : '#1D253F', fontSize: '2em'
          })}> Roster&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/fightopera/about' style={({ isActive }) => ({
            color: isActive ? '#DC143C' : '#1D253F', fontSize: '2em'
          })}>About&nbsp;</NavLink>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default nav