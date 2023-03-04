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
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

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
      <PayPalScriptProvider
        options={{
          "client-id":
            "AV-2UCbva5nF1Z9mHJOyZBxxepjnGE7Fy5Fwp46v1uQAab0WrYiOsr59D15zUQ8i37P0GdlL1eTpAY7y",
        }}
      >
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
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
