import { MutableRefObject, useLayoutEffect, useState } from 'react';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useDimensions = <T extends Element>(ref: MutableRefObject<T>) => {
  const [dimensions, setDimensions] = useState<any | null>(null);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setDimensions(entry.target.getBoundingClientRect());
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return dimensions;
};
