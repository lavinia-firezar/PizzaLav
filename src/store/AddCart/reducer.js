export const initialStateCart = {
  productsCart: [],
};

export function cartReducer(state, action) {
  const previousProducts = state.productsCart;
  const newProduct = action.payload;
  switch (action.type) {
    case "ADD_TO_CART": {
      const foundProduct = previousProducts.find((product) => {
        return newProduct.id === product.id;
      });

      if (!foundProduct) {
        newProduct.quantity = 1;
        newProduct.pricefinal = newProduct.quantity * newProduct.price;
        const newState = {
          productsCart: [...previousProducts, newProduct],
        };
        return newState;
      } else {
        const updatedProducts = previousProducts.map((product) => {
          if (newProduct.id === product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });

        const priceFinalProducts = updatedProducts.map((product) => {
          if (newProduct.id === product.id) {
            return {
              ...product,
              pricefinal: product.quantity * product.price,
            };
          }
          return product;
        });

        const newState = {
          productsCart: priceFinalProducts,
        };

        return newState;
      }
    }
    case "REMOVE_FROM_CART": {
      const productsFiltered = previousProducts.filter((product) => {
        return product.id !== newProduct;
        // Daca produsul pe care doresti sa il stergi este diferit de celelalte produse, atunci celelalte produse vor fi salvate in productsFiltered si produsul va fii eliminat din lista
      });

      const newState = {
        productsCart: productsFiltered,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
