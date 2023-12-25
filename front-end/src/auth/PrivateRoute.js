import React from 'react'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useUser } from './useUser';

function PrivateRoute( props ) {
    const user = useUser();

    if (!user) return <Redirect to="/login" />
  return (
    <Route {...props} />
  )
}

export default PrivateRoute