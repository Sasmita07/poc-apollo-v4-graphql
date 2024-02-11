# poc-apollo-v4-graphql

# GraphQL Modules with Apollo Server v4 example

The purpose if this repo is to demonstrate how to implement a GraphQL Modules API with the following tech stack:

- [GraphQL Modules](https://the-guild.dev/graphql/modules/docs)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org/)
- [Codegen](https://the-guild.dev/graphql/codegen/docs/guides/graphql-modules)

It contains below folder structure:

| File or Folder     | Purpose                            |
| ------------------ | ---------------------------------- |
| `src/modules`      | graphQL modules                    |
| `src/integrations` | fetching from datasorce            |
| `package.json`     | project metadata and configuration |
| `readme.md`        | this getting started guide         |

## Running Locally

- Install node modules in root folder `npm install`
- Run `npm run start` to start app
- Run app in the browser which is usually `http://localhost:4000`

## GraphQL Code-Generator

- GraphQL Code-Generator which helps you create types (and more) based on your GraphQL schema using graphql-modules-preset and typescript-resolvers
- Add codegen.ts in the root folder. Follow the config setup.
- Run `npm run graphql-types-generate` to generate types
