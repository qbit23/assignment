import { Routes, Route } from "react-router-dom";

interface IRoute {
  id: number | string;
  path: string;
  name: string;
  component: () => JSX.Element;
}

export default function generateRoutes(routes: IRoute[]) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}
