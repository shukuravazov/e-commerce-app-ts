import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../context /ShoppingCartContext";

function NavBar() {
  const { openCart, cartQuantit } = useShoppingCart();
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantit > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "5rem", height: "3rem" }}
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 10,
                right: 10,
                transform: "translate(40%, 40%)",
              }}
            >
              {cartQuantit}
            </div>
          </Button>
        )}
      </Container>
    </NavBarBs>
  );
}

export default NavBar;
