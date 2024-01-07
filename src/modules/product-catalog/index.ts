import { parse } from 'graphql';
import { createModule, gql } from 'graphql-modules';
import { productCatalogResolvers } from './resolvers/product-catalog.resolver';

// TO DO: tsconfig to import SDL file
import ProductTypedef from './schemas/product-catalog.schema.graphql';

export const productCatalogModule = createModule({
  id: 'product-catalog-module',
  typeDefs: [
    gql`
      type Query {
        "Get an overview on existing products"
        products: [Product]
      }

      "A product overview on a specific category"
      type Product {
        id: ID!
        title: String
        description: String
        category: String
        Price: Float
      }
    `,
  ],
  resolvers: {
    Query: productCatalogResolvers,
  },
});
