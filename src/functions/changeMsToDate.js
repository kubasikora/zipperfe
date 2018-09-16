const changeMsToDate = ms => {
  let date = new Date(ms);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
};

export default changeMsToDate;
