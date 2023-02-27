import { useContext, useState } from "react";
import styles from "./HeaderPage.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CartContext } from "../store/AddCart/context";

function HeaderPage() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const { cartState } = useContext(CartContext);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Container
          className={` d-flex justify-content-between align-items-center`}
        >
          <Link to="/" className="p-3">
            <img
              src="https://cdn.worldvectorlogo.com/logos/pizza-pizza.svg"
              alt="pizza logo"
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/" className={`${styles.li} p-3 text-uppercase`}>
                  Acasă
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/pizza" className={`${styles.li} p-3 text-uppercase`}>
                  Pizza
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/favorite"
                  className={`${styles.li} p-3 text-uppercase`}
                >
                  Favorite
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/cart" className={`${styles.li} p-3 text-uppercase`}>
                  Coş(
                  {cartState.productsCart.reduce(
                    (sum, product) => sum + product.quantity,
                    0
                  )}
                  )
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default HeaderPage;
