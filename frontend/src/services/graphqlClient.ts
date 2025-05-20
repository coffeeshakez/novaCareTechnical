import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { DocumentNode } from '@apollo/client';

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master';

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error('Environment variables are missing');
}

const URI = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;
const HEADERS = {
  authorization: `Bearer ${ACCESS_TOKEN}`,
};

export const client = new ApolloClient({
  uri: URI,
  headers: HEADERS,
  cache: new InMemoryCache(),
});

/**
 * Executes a GraphQL query
 * @param query The GraphQL query document
 * @param variables Optional variables for the GraphQL query
 * @returns A Promise that resolves to the query result
 */
export async function executeGraphQLQuery<TData>(
  query: DocumentNode,
  variables?: Record<string, any>
): Promise<TData> {
  try {
    const { data, error } = await client.query<TData>({
      query,
      variables,
      fetchPolicy: 'network-only',
    });

    if (error) {
      console.error('GraphQL query error:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to execute GraphQL query:', error);
    throw error;
  }
}
