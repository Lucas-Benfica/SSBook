import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './styles/ResetStyle.js'
import { ApolloProvider } from '@apollo/client'
import client from './connections/apolloClient.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ResetStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
