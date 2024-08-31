import React, { FC, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { store } from './store';
import client from './config/graphql-client';

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <MemoryRouterProvider>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
        >
          {children}
        </SnackbarProvider>
      </ApolloProvider>
    </Provider>
  </MemoryRouterProvider>
);

const customRender = (ui: ReactElement, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
