import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

function Reddit() {

  return(
    
    <div style={{backgroundColor:"#D9D9F3"}}>


<Navbar bg="light" expand="lg">
  <Navbar.Brand style={{marginLeft: "1%"}} href="#home">Reddit</Navbar.Brand>
    <Form style={{marginLeft: "5%"}} inline>
      <FormControl style={{backgroundColor: "", width: "100%"}} type="text" placeholder="Search" className="mr-sm-2" />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
    
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">


    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    

  <Button style={{ width:"13%",marginRight: "2%", borderRadius:"9999px", backgroundColor:"white", color:"#0079D3"}} variant="primary" size="sm">
      Log In
    </Button>{' '}
    <Button style={{ width:"13%",  borderRadius:"9999px", backgroundColor:"#0079D3", color:"white"}} variant="secondary" size="sm">
      Sign Up
    </Button>

      <NavDropdown title="Profile" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>


  </Navbar.Collapse>
</Navbar>


<div style={{marginTop: "2%" }}>

  <h6 style={{marginTop: "2%", paddingLeft:"11.5%" }} >Trending Today</h6>
  </div>


<div style={{ textAlign: "center"}}>





<Card style={{ width: '250px',display: "inline-block",  margin: "0.5%" }}>
  <Card.Body>
  <Card.Link href="#">Card Title</Card.Link>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example
      Some quick example
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

<Card style={{ width: '250px',display: "inline-block", margin: "0.5%" }}>
  <Card.Body>
  <Card.Link href="#">Card Title</Card.Link>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example 
      Some quick example 
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

<Card style={{ width: '250px',display: "inline-block" , margin: "0.5%"}}>
  <Card.Body>
  <Card.Link href="#">Card Title</Card.Link>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example 
      Some quick example 
    </Card.Text>
    {/* <Card.Link href="#">Card Title</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

<Card style={{ width: '250px',display: "inline-block",  margin: "0.5%" }}>
  <Card.Body>
    <Card.Link href="#">Card Title</Card.Link>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example 
      Some quick example 
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>


</div>






<div style={{width:"86%", display:"flex", marginLeft:"10%"}} >






<div style={{ width:"65%",padding:"2%"}}>

<Card style={{padding:"2%", marginTop:"2%"}}>
    <Card.Img variant="top" style={{width:"100%"}} src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card style={{padding:"2%", marginTop:"2%"}}>
    <Card.Img variant="top" style={{width:"100%"}} src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{padding:"2%", marginTop:"2%"}}>
    <Card.Img variant="top" style={{width:"100%"}} src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>




</div>








  <div style={{width:"20%", paddingLeft:"1%", marginTop:"3%" }}>

  <Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '280px', marginTop:"3%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
 </div>





</div>











    </div>

)
}
ReactDOM.render(<Reddit />,document.getElementById("root"));
