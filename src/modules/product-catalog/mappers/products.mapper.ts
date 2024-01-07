export const getProductCatalogResponseToProducts = (results: any) => {
  return results.map((result: any) => {
    return {
      id: result.id,
      title: result.title,
      description: result.description,
      category: result.category,
      price: result.price,
    };
  });
};
