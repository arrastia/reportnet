type Key = string;
type Value<T> = T;

const getItem = ({ key }: { key: Key }) => window.localStorage.getItem(key);

const setItem = <T extends {}>({ key, value }: { key: Key; value: Value<T> }) => window.localStorage.setItem(key, JSON.stringify(value));

export const LocalStorageUtils = { getItem, setItem };
