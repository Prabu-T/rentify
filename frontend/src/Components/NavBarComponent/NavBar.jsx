import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonproperty from '../ButtonComponent/Buttonproperty';
import { useNavigate } from 'react-router-dom';
function NavBarHome() {
  const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/add');
    }
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#2E3192' }} >
      <Container style={{paddingLeft:'5%'}}>
        <Navbar.Brand  href="#home" style={{ fontSize: '2rem',fontWeight:"bold" ,color:"white" }}>Rentify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link href="#features" style={{color:'white'}}>Houses</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>Rent</Nav.Link>
          </Nav>
          <Buttonproperty text={"Sell"} onClick={handleClick}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHome;