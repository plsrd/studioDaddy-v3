import { createMemoryHistory } from 'history';
import { useMemo } from 'react';

export function useMagicRouter(initial) {
  const history = useMemo(() => {
    const history = createMemoryHistory({
      initialEntries: [initial],
    });
    return {
      get action() {
        return history.action;
      },
      get index() {
        return history.index;
      },
      get location() {
        return history.location;
      },
      get createHref() {
        return history.createHref;
      },
      get push() {
        return history.push;
      },
      get replace() {
        return history.replace;
      },
      get go() {
        return history.go;
      },
      get back() {
        return history.back;
      },
      get forward() {
        return history.forward;
      },
      get block() {
        return history.block;
      },
      // Overriding listen to workaround a problem where native history provides history.listen(location => void), but the npm package is history.listen(({action, location}) => void)
      listen(listener) {
        return history.listen(({ action, location }) => {
          console.log('history.listen', action, location);
          // @ts-expect-error -- working around a bug? in studio
          listener(location);
        });
      },
    };
  }, [initial]);

  return history;
}
