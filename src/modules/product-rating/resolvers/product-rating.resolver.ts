import { getProductRatingIntegration } from '../../../integrations/get-product-rating.integration';
import { QueryRatingArgs } from '../../../__generated__/resolvers-types';

export const productratingResolvers = {
  Query: {
    rating: async (_: any, { productId }: QueryRatingArgs) => {
      const rating = await getProductRatingIntegration(productId);
      return rating;
    },
  },
};
