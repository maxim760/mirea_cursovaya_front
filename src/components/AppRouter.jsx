import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { RedirectRoute, routes } from '../utils/routes'

export const AppRouter = () => {
  return (
    <Switch>
      {routes.map(({withBackBtn, ...route}) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={RedirectRoute} />
    </Switch>
  )
}
