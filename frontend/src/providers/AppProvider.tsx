import type { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/services/graphqlClient';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default AppProvider;
