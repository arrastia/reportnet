import type { Config, MediaQuery } from 'ui/@types/Media.types';

const createMediaQueries = (breakpoints: Config): MediaQuery<Config>[] => {
  const sortedBreakpoints = Object.keys(breakpoints).sort((a, b) => breakpoints[b] - breakpoints[a]);

  return sortedBreakpoints.map((breakpoint, index) => {
    let query = '';

    const minWidth = breakpoints[breakpoint];
    const nextBreakpoint = sortedBreakpoints[index - 1] as string | undefined;
    const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] : null;

    if (minWidth >= 0) {
      query = `(min-width: ${minWidth}px)`;
    }

    if (maxWidth !== null) {
      if (query) {
        query += ' and ';
      }
      query += `(max-width: ${maxWidth - 1}px)`;
    }

    const mediaQuery: MediaQuery<Config> = { breakpoint, maxWidth: maxWidth ? maxWidth - 1 : null, minWidth, query };

    return mediaQuery;
  });
};

export const MediaUtils = { createMediaQueries };
