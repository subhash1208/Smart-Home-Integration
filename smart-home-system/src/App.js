import React from 'react';
import './App.css';
import { Amplify, Auth } from 'aws-amplify';
import awsConfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Ensure styles are imported

Amplify.configure(awsConfig);

function App() {
  return (  
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email" // Set this to 'email'
        formFields={[
          { type: 'email' }, // Email field
          { type: 'password' },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Smart Home System!</h1>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
