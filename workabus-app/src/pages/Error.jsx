import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Error = () => {
  const { isLoading, error } = useAuth0();
  return (
    <div>
        <div>{String(isLoading)}</div>

        Error :
        {error}
        
        </div>
  )
}

export default Error