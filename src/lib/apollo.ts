import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl62on0ae301xo53cv4mh4/master',
    cache: new InMemoryCache()
})