import React, { useContext, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { addToCart } from "../store/AddCart/actions";
import { CartContext } from "../store/AddCart/context";
import { addToFavorite } from "../store/AddFavorite/actions";
import { FavoriteContext } from "../store/AddFavorite/context";
import styles from "./PizzaCard.module.css";

function PizzaCard(props) {
  const { id, name, description, image, price } = props;

  const [stateAlertFav, setStateAlertFav] = useState(false);
  const [stateAlertCart, setStateAlertCart] = useState(false);

  const { favDispatch } = useContext(FavoriteContext);

  function handleAddToFavorite(product) {
    const actionresult = addToFavorite(product);

    favDispatch(actionresult);

    setStateAlertFav(true);
    setTimeout(() => {
      setStateAlertFav(false);
    }, 2500);
  }

  const { cartDispatch } = useContext(CartContext);

  function handleAddToCart(product) {
    const actionResult = addToCart(product);

    cartDispatch(actionResult);

    setStateAlertCart(true);
    setTimeout(() => {
      setStateAlertCart(false);
    }, 2500);
  }

  return (
    <div>
      {stateAlertFav && (
        <Alert variant="success" id={styles.alert}>
          Ai adăugat produsul la favorite!
        </Alert>
      )}
      {stateAlertCart && (
        <Alert variant="success" id={styles.alertCart}>
          Ai adăugat un produs în coşul de cumpărături!
        </Alert>
      )}
      <Card
        className={` h-100 d-flex flex-column justify-content-between align-items-center`}
      >
        <Link to={`/data/${id}`}>
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title className={styles.name}>{name}</Card.Title>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <Card.Text className={styles.name}>Pret: {price} RON</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              handleAddToCart({
                id: id,
                name: name,
                description: description,
                image: image,
                price: price,
              });
            }}
          >
            Adaugă în coş
          </Button>

          <Button
            variant="light"
            className={styles.buttonFav}
            onClick={() => {
              handleAddToFavorite({
                id: id,
                name: name,
                description: description,
                image: image,
                price: price,
              });
            }}
          >
            <span className="material-icons text-success">favorite</span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PizzaCard;
