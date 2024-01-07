import { Application, createApplication } from 'graphql-modules';
import { productCatalogModule } from './product-catalog';

export const application: Application = createApplication({
  modules: [productCatalogModule],
});
