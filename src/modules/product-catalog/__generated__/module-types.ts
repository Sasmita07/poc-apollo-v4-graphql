import * as Types from "../../../__generated__/resolvers-types";
import * as gm from "graphql-modules";
export namespace ProductCatalogModule {
  interface DefinedFields {
    Query: 'products' | 'product';
    Product: 'id' | 'title' | 'description' | 'category' | 'price';
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
      product?: gm.Middleware[];
    };
    Product?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      description?: gm.Middleware[];
      category?: gm.Middleware[];
      price?: gm.Middleware[];
    };
  };
}