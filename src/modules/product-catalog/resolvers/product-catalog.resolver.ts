import { getProductByIdIntegration } from '../../../integrations/get-product-by-id.integration';
import { getProductCatalogIntegration } from '../../../integrations/get-product-catalog.integration';
import { QueryProductArgs } from '../../../__generated__/resolvers-types';
import {
  getProductByIdResponseToProduct,
  getProductCatalogResponseToProducts,
} from '../mappers/products.mapper';
import { ProductCatalogModule } from '../__generated__/module-types';

export const productCatalogResolvers: ProductCatalogModule.Resolvers = {
  Query: {
    products: async () => {
      const result = await getProductCatalogIntegration();
      return getProductCatalogResponseToProducts(result);
    },
    product: async (_, { id }: QueryProductArgs) => {
      const result = await getProductByIdIntegration(id);
      return getProductByIdResponseToProduct(result);
    },
  },
};
