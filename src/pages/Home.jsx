import Container from "react-bootstrap/Container";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <section>
        <Container className={styles.section1}>
          <div>
            <h2>
              Pregătim cea mai bună Pizza din Oradea, în locaţia noastră sau o
              aducem la tine acasă sau la birou!
            </h2>
            <h5>
              Dă click{" "}
              <Link to="/pizza" className={styles.link}>
                AICI
              </Link>{" "}
              si vezi diverse tipuri de pizza!
            </h5>
          </div>
          <img
            className={styles.imageHome}
            src="https://st3.depositphotos.com/29384342/33640/i/450/depositphotos_336401950-stock-photo-recipe-concept-margherita-pizza-top.jpg"
            alt="PizzaHome"
          />
        </Container>
      </section>
      <section>
        <Container>
          <img
            className={styles.image}
            src="http://st2.depositphotos.com/2078857/7393/i/450/depositphotos_73937095-Rustic-pizza-topped-with-fresh-basil-leaves.jpg"
            alt="pizza1"
          />
          <img
            className={styles.image2}
            src="https://st2.depositphotos.com/1040166/10601/i/450/depositphotos_106017026-stock-photo-hands-taking-a-piece-of.jpg"
            alt="pizza2"
          />
          <img
            className={styles.image}
            src="https://img.freepik.com/premium-photo/pink-background-pizza-top-view-piece-pizza-pizza-slice-with-googly-eyes_724662-1666.jpg"
            alt="pizza3"
          />
        </Container>
      </section>
      <section>
        <Container id={styles.section2}>
          <p>
            Cu peste 20 de ani de experienţă în cele mai renumite pizzerii din
            Milano si Brescia, maestrii pizzari vă invită să acceptaţi o
            provocare şi să descoperiţi o savoare nouă, combinând ingredientele
            după bunul plac.
          </p>
          <p>
            În fiecare produs din acest meniu veti regăsi ingrediente proaspete
            şi tradiţia celei mai autentice Pizza pe vatră, doar la PizzaLav!
          </p>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
