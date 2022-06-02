export const getYesterday = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday;
};

export const getMonth2Digits = (date: Date) => {
  const month = date.getMonth() + 1;
  if (month < 10) {
    return '0' + month;
  }
  return month;
};

export const getDay2Digits = (date: Date) => {
  const day = date.getDate();
  if (day < 10) {
    return '0' + day;
  }
  return day;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = getMonth2Digits(date);
  const day = getDay2Digits(date);
  return year + '/' + month + '/' + day;
};
