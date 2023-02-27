export const initialStateFav = {
  productsFav: [],
};

export function favoriteReducer(state, action) {
  const newProduct = action.payload;
  const previousProducts = state.productsFav;

  switch (action.type) {
    case "ADD_TO_FAVORITE": {
      const productIsInList = previousProducts.find((product) => {
        return product.id === newProduct.id;
      });

      if (productIsInList) {
        return state;
      } else {
        const newState = {
          productsFav: [newProduct, ...previousProducts],
        };
        return newState;
      }
    }
    case "REMOVE_FROM_FAVORITE": {
      const filteredProducts = previousProducts.filter((product) => {
        return product.id === newProduct;
        // Am folosit aceasta egalitate pentru a sterge toate produsele favorite, astfel aceasta conditie va fii mereu falsa
      });
      const newState = {
        productsFav: filteredProducts,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
