import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { ISection, UserCardType } from 'ui/@types/Layout.types';

import { sidebarStore, userCardShapeStore } from 'ui/_tools/Atoms/LayoutStore';

export const useSidebar = ({ cardShape, sections }: { cardShape: UserCardType; sections: ISection[] }) => {
  const setSidebarItems = useSetRecoilState(sidebarStore);
  const setUserCardShapeStore = useSetRecoilState(userCardShapeStore);

  useEffect(() => {
    setSidebarItems(sections);
    setUserCardShapeStore(cardShape);

    return () => {
      setSidebarItems([]);
    };
  }, [cardShape, sections, setSidebarItems, setUserCardShapeStore]);
};
