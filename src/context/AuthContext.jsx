import React from 'react';

const {AuthProvider, AuthConsumer} = React.createContext({
  signedIn: false,
  username: ''
})