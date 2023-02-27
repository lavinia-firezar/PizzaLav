import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import data from "../products.json";
import PizzaList from "./PizzaList";

function Pizza() {
  return (
    <Layout>
      <section>
        <Container>
          <PizzaList productsList={data} />
        </Container>
      </section>
    </Layout>
  );
}

export default Pizza;
