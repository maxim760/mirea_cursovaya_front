import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { RedirectRoute, routes } from '../utils/routes'
import { Template } from './Template'

export const AppRouter = () => {
  return (
    <Template>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Redirect to={RedirectRoute} />
      </Switch>
    </Template>
  )
}
