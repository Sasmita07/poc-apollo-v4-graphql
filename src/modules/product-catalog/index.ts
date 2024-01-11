import { parse } from 'graphql';
import { createModule } from 'graphql-modules';
import { productTypedef } from '../../utils/app.util';
import { productCatalogResolvers } from './resolvers/product-catalog.resolver';

export const productCatalogModule = createModule({
  id: 'product-catalog-module',
  typeDefs: [
    parse(
      productTypedef(
        'src/modules/product-catalog/schemas/product-catalog.schema.graphql'
      )
    ),
  ],
  resolvers: {
    Query: productCatalogResolvers,
  },
});
