import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.tsx';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
