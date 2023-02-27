import Footer from "./Footer";
import HeaderPage from "./HeaderPage";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <HeaderPage />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
