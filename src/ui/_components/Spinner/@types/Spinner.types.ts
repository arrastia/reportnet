type SpinnerType = 'CLIP_LOADER' | 'SYNC_LOADER';

export interface SpinnerProps {
  className?: string;
  color?: string;
  margin?: number;
  size?: number;
  type?: SpinnerType;
}
