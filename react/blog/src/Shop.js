import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useParams, Outlet } from "react-router-dom";
import { useState } from "react";
import { Button, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { data } from "./data";
import Detail from "./Detail";
import ShopMain from "./ShopMain";
import Event from "./route/Event";
export default function Shop() {
  const [shoes] = useState(data);
  const { params } = useParams();
  console.log(params);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/shop">Shop Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/shop">Home</Nav.Link>
            {/* <Nav.Link href="/shop/detail/1">Detail</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />

      <Routes>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/" element={<ShopMain shoes={shoes} />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>one</div>} />
          <Route path="two" element={<div>two</div>} />
        </Route>
        <Route path="*" element={<h1>없는 페이지</h1>} />
      </Routes>
    </div>
  );
}
