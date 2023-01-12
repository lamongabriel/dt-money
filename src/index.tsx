import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer, Model } from 'miragejs';
import { Transaction } from './hooks/useTransactions';

const localStoreItems = localStorage.getItem('dtmoney@transactions')
const data = localStoreItems ? JSON.parse(localStoreItems) : []

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: data
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

    
    this.delete('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) as Transaction

      let id = data.id

      schema.find('transaction', id)?.destroy()

      return this.schema.all('transaction')
    })

    this.put('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) as Transaction

      let id = data.id

      schema.find('transaction', id)?.update(data)

      return this.schema.all('transaction')
    })

  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);