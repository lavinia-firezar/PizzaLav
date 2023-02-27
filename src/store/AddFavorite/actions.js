export function addToFavorite(product) {
  return {
    type: "ADD_TO_FAVORITE",
    payload: product,
  };
}

export function removeFromFavorite(productId) {
  return {
    type: "REMOVE_FROM_FAVORITE",
    payload: productId,
  };
}
