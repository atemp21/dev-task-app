import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typesArray  = loadFilesSync(join(__dirname, './**/*/typedefs.*'));
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(join(__dirname, './**/*/resolver.*'));
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;