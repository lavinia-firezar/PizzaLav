import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import { removeFromCart } from "../store/AddCart/actions";
import { CartContext } from "../store/AddCart/context";
import styles from "./CartPage.module.css";

function CartPage() {
  const { cartState, cartDispatch } = useContext(CartContext);
  const sumPriceProducts = cartState.productsCart.reduce(
    (sum, product) => sum + product.pricefinal,
    0
  );
  const euroPriceProducts = parseFloat(sumPriceProducts / 4.93).toFixed(2);

  function handleRemoveFromCart(productId) {
    const actionResult = removeFromCart(productId);

    cartDispatch(actionResult);
  }

  return (
    <Layout>
      <section>
        <Container>
          <Row>
            {cartState.productsCart.length === 0 ? (
              <h2>Nu ai niciun produs în coş</h2>
            ) : (
              cartState.productsCart.map((product) => {
                return (
                  <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card
                      key={product.id}
                      className={` h-100 d-flex flex-column justify-content-between align-items-center`}
                    >
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title className={styles.name}>
                          {product.name}
                        </Card.Title>
                        <Card.Title>Preţ: {product.price} RON</Card.Title>
                        <Card.Title>
                          {product.quantity} x{" "}
                          <span className="material-icons text-success">
                            local_pizza
                          </span>{" "}
                          : {product.pricefinal} RON
                        </Card.Title>
                        <Button
                          variant="light"
                          onClick={() => handleRemoveFromCart(product.id)}
                          id={styles.buttonCart}
                        >
                          <span className="material-icons text-success">
                            close
                          </span>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            )}
            <div>
              <h2>Suma totală este de: {sumPriceProducts} RON</h2>
              <h3>
                Cumpără acum
                <span className="material-icons text-success">
                  keyboard_double_arrow_down
                </span>
              </h3>
              <PaypalCheckoutButton priceProduct={euroPriceProducts} />
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default CartPage;
