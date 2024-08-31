import 'bootstrap/dist/css/bootstrap.min.css';
import '@dl/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';
import { ClientOnly } from '@dl/components/ClientOnly';
import { useEffect } from 'react';
import { initSocket } from '@dl/services/web-socket';
import { Provider } from 'react-redux';
import client from '../config/graphql-client';
import { store } from '../store';

process.on('uncaughtException', (err) => {
  console.log('here: ', err);
});
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const socket = initSocket();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ClientOnly>
      <ApolloProvider client={client}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
        >
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SnackbarProvider>
      </ApolloProvider>
    </ClientOnly>
  );
}
