import logo from './logo.svg';
import './App.css';
import Amplify from  'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn,withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

const App = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Custom email Label",
            placeholder: "custom email placeholder",
            required: true,
          },
          {
            type: "password",
            label: "Custom Password Label",
            placeholder: "custom password placeholder",
            required: true,
          },
          {
            type: "phone_number",
            label: "Custom Phone Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
        ]} 
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
  );
};

export default withAuthenticator(App);
