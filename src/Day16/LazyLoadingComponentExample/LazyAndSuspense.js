import React, { Suspense, lazy } from "react";
//import LazyLoadHeader from "./LazyLoadHeader";

const LazyLoadHeader = lazy(() => import("./LazyLoadHeader"));
const LazyAndSuspense = () => {
  return (
    <div>
      <h1>I always render</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <LazyLoadHeader />
      </Suspense>
    </div>
  );
};

export default LazyAndSuspense;
