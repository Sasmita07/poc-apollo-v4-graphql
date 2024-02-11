/* eslint-disable */
import * as Types from "../../../__generated-types__/graphql";
import * as gm from "graphql-modules";
export namespace ProductCatalogModule {
  interface DefinedFields {
    Query: 'products';
    Product: 'id' | 'title' | 'description' | 'category' | 'Price';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Product = Pick<Types.Product, DefinedFields['Product']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type ProductResolvers = Pick<Types.ProductResolvers, DefinedFields['Product'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Product?: ProductResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      products?: gm.Middleware[];
    };
    Product?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      description?: gm.Middleware[];
      category?: gm.Middleware[];
      Price?: gm.Middleware[];
    };
  };
}