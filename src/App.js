import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import PizzaDetails from "./pages/PizzaDetails";
import { CartContext } from "./store/AddCart/context";
import { cartReducer, initialStateCart } from "./store/AddCart/reducer";
import { FavoriteContext } from "./store/AddFavorite/context";
import { favoriteReducer, initialStateFav } from "./store/AddFavorite/reducer";

function App() {
  const [favState, favDispatch] = useReducer(favoriteReducer, initialStateFav);
  const favoriteContextValue = {
    favState,
    favDispatch,
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialStateCart);
  const cartContextValue = {
    cartState,
    cartDispatch,
  };

  return (
    <div className="App">
      <CartContext.Provider value={cartContextValue}>
        <FavoriteContext.Provider value={favoriteContextValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/data/:id" element={<PizzaDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </FavoriteContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
