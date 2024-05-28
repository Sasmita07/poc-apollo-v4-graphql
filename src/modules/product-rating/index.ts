import { parse } from 'graphql';
import { createModule } from 'graphql-modules';
import { productTypedef } from '../../utils/app.util';
import { productratingResolvers } from './resolvers/product-rating.resolver';

export const productRatingModule = createModule({
  id: 'product-rating-module',
  typeDefs: [
    parse(
      productTypedef(
        'src/modules/product-rating/schemas/product-rating.schema.graphql'
      )
    ),
  ],
  resolvers: productratingResolvers,
});
