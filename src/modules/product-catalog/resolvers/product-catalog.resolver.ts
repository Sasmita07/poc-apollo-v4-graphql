import { AxiosRequestConfig } from 'axios';
import { getProductCatalogIntegration } from '../../../integrations/get-product-catalog.integration';
import { getProductCatalogResponseToProducts } from '../mappers/products.mapper';

export const productCatalogResolvers = {
  async products() {
    // TO DO: Create an axios adapter
    const config: AxiosRequestConfig = {
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
    };
    const result = await getProductCatalogIntegration(config);
    return getProductCatalogResponseToProducts(result);
  },
};
