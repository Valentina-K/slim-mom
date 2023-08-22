import product from 'data/product.json';
export const getProductsByBlood = typeBlood => {
  const nonRecomendedProduct = product.filter(
    item => item.groupBloodNotAllowed[typeBlood] === true
  );
  return nonRecomendedProduct;
};
