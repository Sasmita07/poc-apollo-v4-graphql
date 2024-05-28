import * as Types from "../../../__generated__/resolvers-types";
import * as gm from "graphql-modules";
export namespace ProductRatingModule {
  interface DefinedFields {
    Query: 'rating';
    Rating: 'rate' | 'count';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Rating = Pick<Types.Rating, DefinedFields['Rating']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type RatingResolvers = Pick<Types.RatingResolvers, DefinedFields['Rating'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Rating?: RatingResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      rating?: gm.Middleware[];
    };
    Rating?: {
      '*'?: gm.Middleware[];
      rate?: gm.Middleware[];
      count?: gm.Middleware[];
    };
  };
}