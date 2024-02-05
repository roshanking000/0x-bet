export const getDisplayString = (
  str,
  subLength1,
  subLength2
) => {
  return `${str.toString().substr(0, subLength1)}...${str
    .toString()
    .substr(str.length - subLength2, str.length)}`;
};