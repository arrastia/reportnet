import { useHistory } from 'react-router-dom';

export const useNavigation = () => {
  const { block, createHref, go, goBack, goForward, listen, push, replace } = useHistory();

  return { block, createHref, go, goBack, goForward, listen, push, replace };
};
