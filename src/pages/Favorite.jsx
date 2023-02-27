import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { removeFromFavorite } from "../store/AddFavorite/actions";
import { FavoriteContext } from "../store/AddFavorite/context";
import PizzaList from "./PizzaList";

function Favorite(props) {
  const { id } = props;
  const { favState, favDispatch } = useContext(FavoriteContext);

  function handleRemoveFromFavorite(productId) {
    const actionResult = removeFromFavorite(productId);

    favDispatch(actionResult);
  }
  return (
    <Layout>
      <section>
        <Container>
          {favState.productsFav.length === 0 ? (
            <h3>
              Nu ai adăugat pizza ta favorită în această secţiune. Dă click{" "}
              <Link to="/pizza" style={{ color: "green" }}>
                AICI
              </Link>{" "}
              şi selectează pizza ta favorită
            </h3>
          ) : (
            <div>
              <PizzaList productsList={favState.productsFav} />

              <Button
                variant="success"
                onClick={() => handleRemoveFromFavorite(id)}
              >
                Sterge toate produsele din favorite
              </Button>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
}

export default Favorite;
