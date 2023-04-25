import React from 'react';
import {useState} from 'react'
import AllTickets from './components/Board';
import { ApolloProvider } from '@apollo/client';
import client from './components/Client';
import NewUser from './components/NewUser';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };
  return (
    <div>
      <>
      <h1>Kanban Board</h1>
      </>
      <ApolloProvider client={client}>
        <NewUser onAuth={handleAuthentication} />
        {authenticated && <AllTickets />}
        </ApolloProvider>
    </div>
  );
};

export default App;