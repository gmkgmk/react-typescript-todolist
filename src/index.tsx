import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import RouteConfig from './routeConfig';
const routeContextPath = '/';
const renderRouteConfig = routes => {
  let children: any = [];
  const renderRoute = item => {
    //  todolist ==> /todolist
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    //   修改 //**  => /**
    newContextPath = newContextPath.replace(/\/+/g, '/');

    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfig(item.childRoutes);
      children.push(
        <Route
          key={newContextPath}
          render={props => (
            <item.component {...props}>{childRoutes}</item.component>
          )}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(
        <Route
          key={newContextPath}
          render={props => <item.component {...props} />}
          path={newContextPath}
          exact={item.exact}
        />
      );
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r));
    }
  };
  routes.forEach(item => renderRoute(item));
  return <Switch>{children}</Switch>;
};
const children = renderRouteConfig(RouteConfig);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
