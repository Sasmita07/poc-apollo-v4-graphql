import { getProductCatalogIntegration } from '../../../integrations/get-product-catalog.integration';
import { getProductCatalogResponseToProducts } from '../mappers/products.mapper';

export const productCatalogResolvers = {
  async products() {
    const result = await getProductCatalogIntegration();
    return getProductCatalogResponseToProducts(result);
  },
};
