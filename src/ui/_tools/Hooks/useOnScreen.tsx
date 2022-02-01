import { MutableRefObject, useEffect, useState } from 'react';

export const useOnScreen = <T extends Element>(ref: MutableRefObject<T>, rootMargin: string = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [ratio, setRatio] = useState<number | null>(null);

  console.log('ratio :>> ', ratio);

  useEffect(() => {
    const reference = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('entry.isIntersecting :>> ', entry.isIntersecting);
        setIntersecting(entry.isIntersecting);
        setRatio(entry.intersectionRatio);
      },
      { rootMargin, threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.unobserve(reference);
    };
  }, [ref, rootMargin]);

  // const scrollCallback = ([entry]: IntersectionObserverEntry[]) => {
  //   // console.log('entry.isIntersecting :>> ', entry.isIntersecting);
  //   if (entry.isIntersecting) setIntersecting(entry.isIntersecting);
  // };

  // useEffect(() => {
  //   const { current } = ref;

  //   const observer = new IntersectionObserver(scrollCallback, { rootMargin });
  //   observer.observe(ref.current);

  //   return () => {
  //     observer.unobserve(current);
  //   };
  // }, [ref.current]);

  // console.log('isIntersecting :>> ', isIntersecting);

  return isIntersecting;
};
