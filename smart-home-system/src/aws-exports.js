const awsConfig = {
    Auth: {
      region: 'ap-south-1', // Your AWS region
      userPoolId: 'ap-south-1_CaQdbIHah', // Your User Pool ID
      userPoolWebClientId: '5m69i12pe57685khp5s49je56v', // Your App Client ID
    },
    oauth: {
      domain: 'smarthome-auth.auth.ap-south-1.amazoncognito.com', // Correct Cognito domain
      scope: ['email', 'openid'], // Ensure you have the right scopes
      redirectSignIn: 'http://localhost:3000/', // Correct for development
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code', // Use 'code' for Authorization code grant
    },
  };
  
  export default awsConfig;
  