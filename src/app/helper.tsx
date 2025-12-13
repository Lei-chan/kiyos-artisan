export const wait = async (seconds: number) =>
  new Promise((resolve) => setTimeout(() => resolve, seconds * 1000));

export const dateIsNew = (date: string) => {
  const daysPast = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000 / 60 / 60 / 24
  );

  return daysPast <= 7 ? true : false;
};
