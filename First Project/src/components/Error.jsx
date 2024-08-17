import React from 'react';
import {useRouteError} from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Ooops !!</h2>
      <h4>{error.status} : {error.statusText}</h4>
      <h1>{error.data}</h1>
    </div>
  )
}

export default Error
