export interface TitleButtonProps {
  icon: any;
  id: number;
  label?: string;
  onClick: () => void;
}
export interface LargeTitleProps {
  bgColor?: { degrees: number; firstColor: string; secondColor: string };
  isLargeTitle?: boolean;
  isShrunk: boolean;
}

interface TitleProps {
  animations?: string;
  bgColor?: { degrees: number; firstColor: string; secondColor: string };
  isLargeTitle: boolean;
  isShrunk: boolean;
  leftButtons: TitleButtonProps[];
  rightButtons: TitleButtonProps[];
  title: string;
}

export default TitleProps;
