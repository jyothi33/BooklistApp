// import()
// The best way to introduce code-splitting into your app is through the dynamic import() syntax.

// Before:

// import { add } from './math';

// console.log(add(16, 26));
// After:

// import("./math").then(math => {
//   console.log(math.add(16, 26));
// });

//When Webpack comes across this syntax, it automatically starts code-splitting your app. If you’re using Create React App, this is already configured for you and you can start using it immediately.

// React.lazy
// Note:

// React.lazy and Suspense are not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we recommend Loadable Components. It has a nice guide for bundle splitting with server-side rendering.

// The React.lazy function lets you render a dynamic import as a regular component.

// Before:

// import OtherComponent from './OtherComponent';
// After:

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// This will automatically load the bundle containing the OtherComponent when this component is first rendered.

// React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

// The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

// function MyComponent() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <OtherComponent />
//       </Suspense>
//     </div>
//   );
// }
// The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.

// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

// function MyComponent() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <section>
//           <OtherComponent />
//           <AnotherComponent />
//         </section>
//       </Suspense>
//     </div>
//   );
// }
// Error boundaries
// If the other module fails to load (for example, due to network failure), it will trigger an error. You can handle these errors to show a nice user experience and manage recovery with Error Boundaries. Once you’ve created your Error Boundary, you can use it anywhere above your lazy components to display an error state when there’s a network error.

// import React, { Suspense } from 'react';
// import MyErrorBoundary from './MyErrorBoundary';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

// const MyComponent = () => (
//   <div>
//     <MyErrorBoundary>
//       <Suspense fallback={<div>Loading...</div>}>
//         <section>
//           <OtherComponent />
//           <AnotherComponent />
//         </section>
//       </Suspense>
//     </MyErrorBoundary>
//   </div>
// );
