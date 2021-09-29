import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Auth0() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  
  if (isAuthenticated) {
   getAccessTokenSilently({
      audience: process.env.AUTH0_AUDIENCE
    }).then(token => {
      fetch('http://localhost:5001/test', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        console.log(res);
      });
    })
    return (
      <div>
        Hello {user?.name}{' '}
        <button onClick={() => logout({ returnTo: process.env.AUTH0_BASE_URL })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default Auth0;