import { getProductRatingIntegration } from '../../../integrations/get-product-rating.integration';
import { QueryRatingArgs } from '../../../__generated__/resolvers-types';
import { ProductRatingModule } from '../__generated__/module-types';

export const productratingResolvers: ProductRatingModule.Resolvers = {
  Query: {
    rating: async (_: any, { productId }: QueryRatingArgs) => {
      const rating = await getProductRatingIntegration(productId);
      return rating;
    },
  },
};
