export const createIdWithKey = (key: string, id: number) => {
  return `${key}_${id}`;
};

export const deleteKeyFromId = (id: string) => {
  return id.replace(/\D+/gm, '');
};
