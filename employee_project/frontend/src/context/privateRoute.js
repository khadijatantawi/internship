// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, auth, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         auth.accessToken ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? < Outlet /> : <Navigate to="/login" />
};
export default ProtectedRoute;

