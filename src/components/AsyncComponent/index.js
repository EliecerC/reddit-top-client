import React from 'react';
import SimpleBackdrop from '../SimpleBackdrop';

export default function asyncComponent(importComponent, delay = 200) {
  const LazyComponent = React.lazy(importComponent);

  const AsyncComponent = props => (
    <React.Suspense fallback={<SimpleBackdrop delay={delay} />}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

  return AsyncComponent;
}
