import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import 'semantic-ui-css/semantic.min.css'


const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:8080/graphql' }),
    cache: new InMemoryCache(),
  });


const App = (

    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>

);


ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
