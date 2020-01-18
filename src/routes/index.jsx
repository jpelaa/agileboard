import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";

import Loader from "components/Loader";
import NotFound from "layouts/NotFound";

const DashBoard = lazy(() => import("layouts/Dashboard"));
const Login = lazy(() => import("layouts/Login"));
const Completed = lazy(() => import("layouts/Completed"));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <DashBoard path="/dashboard" />
        <Login path="/login" />
        <Completed path="/completed" />
        <NotFound default />
      </Router>
    </Suspense>
  );
};

export default Routes;
