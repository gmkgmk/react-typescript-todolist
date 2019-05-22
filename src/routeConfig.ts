import App from './App';
import todoListRoute from './features/todoList/route';
import { PageNotFound } from './features/common';
const childRoutes = [todoListRoute];

const routes = [
  {
    path: '/',
    component: App,
    childRoutes: [
      ...childRoutes,
      { path: '*', name: 'Page not found', component: PageNotFound },
    ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
  },
];

function handleIndexRoute(route: any) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = route.childRoutes.find(child => child.isIndex);
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = route.path;
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);

export default routes;
