import { useCallback, useDebugValue, useMemo, useState } from 'react';

import { BREAKPOINTS } from 'configuration/constants/media.constants';

import { useIsomorphicEffect } from './useIsomorphicEffect';

import { MediaUtils } from 'ui/_tools/Utils/MediaUtils';

import type { Config, Breakpoint } from 'ui/@types/Media.types';

const { createMediaQueries } = MediaUtils;

const EMPTY_BREAKPOINT = { breakpoint: undefined, maxWidth: undefined, minWidth: undefined } as const;

type Return<C extends Config, D> = D extends undefined ? Breakpoint<C> | typeof EMPTY_BREAKPOINT : D extends keyof C ? Breakpoint<C> : never;

export const useBreakpoint = <C extends Config, D extends keyof C | undefined>(
  config?: C,
  defaultBreakpoint?: D,
  hydrateInitial = true
): Return<C, D> => {
  /** Memoize list of calculated media queries from config */
  const mediaQueries = useMemo(() => createMediaQueries(config || BREAKPOINTS), [config]);

  /** Get initial breakpoint value */
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint<C> | typeof EMPTY_BREAKPOINT>(() => {
    /** Loop through all media queries */
    for (const { query, ...breakpoint } of mediaQueries) {
      /**
       * If we're in the browser and there's no default value,
       * try to match actual breakpoint. If the default value
       * should not be hydrated, use the actual breakpoint.
       */
      if (typeof window !== 'undefined' && !(defaultBreakpoint && hydrateInitial)) {
        const mediaQuery = window.matchMedia(query);
        if (mediaQuery.matches) {
          return breakpoint as Breakpoint<C>;
        }
      } else if (breakpoint.breakpoint === defaultBreakpoint) {
        /** Otherwise, try to match default value */
        return breakpoint as Breakpoint<C>;
      }
    }

    return EMPTY_BREAKPOINT;
  });

  /** If there's a match, update the current breakpoint */
  const updateBreakpoint = useCallback(({ matches }: MediaQueryList | MediaQueryListEvent, breakpoint: Breakpoint<C>) => {
    if (matches) {
      setCurrentBreakpoint(breakpoint);
    }
  }, []);

  /** On changes to mediaQueries, subscribe to changes using window.matchMedia */
  useIsomorphicEffect(() => {
    const unsubscribers = mediaQueries.map(({ query, ...breakpoint }) => {
      const list = window.matchMedia(query);
      updateBreakpoint(list, breakpoint as Breakpoint<C>);

      const handleChange = (event: MediaQueryListEvent) => {
        updateBreakpoint(event, breakpoint as Breakpoint<C>);
      };

      list.addListener(handleChange);
      /** Map the unsubscribers array to a list of unsubscriber methods */
      return () => list.removeListener(handleChange);
    });

    /** Return a function that when called, will call all unsubscribers */
    return () => unsubscribers.forEach(unsubscriber => unsubscriber());
  }, [mediaQueries, updateBreakpoint]);

  /** Print a nice debug value for React Devtools */
  useDebugValue(currentBreakpoint, c =>
    typeof c.breakpoint === 'string' ? `${c.breakpoint} (${c.minWidth} ≤ x${c.maxWidth ? ` < ${c.maxWidth + 1}` : ''})` : ''
  );

  return currentBreakpoint as Return<C, D>;
};
