import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./PizzaDetails.module.css";

import data from "../products.json";

function PizzaDetails() {
  let { id } = useParams();
  // console.log(id);
  const pizzaDetails = data[id];
  const product = {
    name: pizzaDetails.name,
    image: pizzaDetails.image,
    imageDetails1: pizzaDetails.imageDetails1,
    imageDetails2: pizzaDetails.imageDetails2,
    text: pizzaDetails.text,
    price: pizzaDetails.price,
  };

  const { name, text, image, imageDetails1, imageDetails2 } = product;

  return (
    <Layout>
      <section>
        <h1>{name}</h1>
        <p>{text}</p>
      </section>
      <section>
        <Container
          className={`${styles.imgContainer} d-flex justify-content-center`}
        >
          <div>
            <img src={imageDetails1} className={styles.img} alt="pizzaFoto1" />
          </div>
          <img src={image} className={styles.img} alt="pizzaFoto2" />
          <div>
            <img src={imageDetails2} className={styles.img} alt="pizzaFoto3" />
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default PizzaDetails;
