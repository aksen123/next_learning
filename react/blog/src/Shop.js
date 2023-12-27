import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button,Navbar,Nav,Container,NavDropdown } from "react-bootstrap"
import { data } from './data';
export default function Shop(){
  const [shoes] = useState(data)
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop Menu</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/shop">Home</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    <div className='main-bg'></div>
    <div className="container">
  <div className="row">
    {shoes.map((it,i)=>{
      return <Card key={it.id} {...it} />
    })}
  </div>
</div> 
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.id+1}.jpg`} width="80%"/>
    <h4>{props.title}</h4>
    <p>{props.content}</p>
    <p>{props.price}</p>
  </div>
  )
}