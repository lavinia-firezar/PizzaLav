import { Col, Row, Container } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";

function PizzaList(props) {
  const { productsList } = props;
  return (
    <Container>
      <Row>
        {productsList.map((product) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={product.id}>
            <PizzaCard
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PizzaList;
