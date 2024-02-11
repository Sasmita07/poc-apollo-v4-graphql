import { getProductCatalogIntegration } from '../../../integrations/get-product-catalog.integration';
import { getProductCatalogResponseToProducts } from '../mappers/products.mapper';
import { ProductCatalogModule } from '../__generated-types__/module-types';

export const productCatalogResolvers: ProductCatalogModule.Resolvers = {
  Query: {
    async products() {
      const result = await getProductCatalogIntegration();
      return getProductCatalogResponseToProducts(result);
    },
  },
};
