import NotFound from "../components/layout/screen/not-found/NotFound.jsx";
import { routes } from "./routes.data.js";
import {
  BrowserRouter,
  Route, Routes
} from 'react-router-dom'
import React from 'react'

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       {routes.map((route) => (
//         <Route
//           key={route.path}
//           path={route.path}
//           element={<route.component />}
//         />
//       ))}
//       <Route element={<NotFound />} />
//     </Route>
//   )
// );

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
            />
          ))}
        <Route path="*" element{<NotFound />} />
      </Routes>
    </BrowserRouter>

  )

}

export default Router;
