export const SetData = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const GetData = (key) => {
  const storage = localStorage.getItem(key);
  if (storage) return JSON.parse(storage);
  return false;
};

export const RemoveData = (key) => localStorage.removeItem(key);
