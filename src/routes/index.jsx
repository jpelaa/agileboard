import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";

import Loader from "components/Loader";

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
      </Router>
    </Suspense>
  );
};

export default Routes;
