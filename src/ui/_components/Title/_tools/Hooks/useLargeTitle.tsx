import { RefObject, useLayoutEffect, useState } from 'react';

export const useLargeTitle = (mainRef: RefObject<HTMLDivElement>) => {
  const [currentScrollY, setCurrentScrollY] = useState(0);
  //   const [layout, setLayout] = useState({ height: 0, width: 0, top: 0, left: 0 });

  //   const prevScrollY = useRef(0);
  //   const mainRef: RefObject<HTMLDivElement> = useRef(null);

  //   useLayoutEffect(() => {
  //     if (mainRef.current) {
  //       const { height, left, top, width } = mainRef.current.getBoundingClientRect();
  //       setLayout({ height, left, top, width });
  //     }
  //   }, []);

  const onScroll = (e: any) => {
    setCurrentScrollY(e?.target?.scrollTop);
    // prevScrollY.current = currentScrollY;
  };

  return { currentScrollY, onScroll };
};
