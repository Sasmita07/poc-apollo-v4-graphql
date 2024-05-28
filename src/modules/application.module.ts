import { Application, createApplication } from 'graphql-modules';
import { productCatalogModule } from './product-catalog';
import { productRatingModule } from './product-rating';

export const application: Application = createApplication({
  modules: [productCatalogModule, productRatingModule],
});
