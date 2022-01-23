export const useSetLocalStorage = (key: string) => {
  const setValue = (value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  return setValue;
};
