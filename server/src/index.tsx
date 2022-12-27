import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AppIntlProvider from './components/AppIntlProvider'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <AppIntlProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppIntlProvider>
  </ApolloProvider>,
)
