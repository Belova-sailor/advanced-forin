export default function sortByProps(obj, arr = []) {
  const result1 = [];
  const result2 = [];
  for (const key in obj) {
    if (!arr.includes(key)) {
      result2.push({
        key,
        value: obj[key],
      });
    }
  }
  arr.forEach((elem) => {
    result1.push({
      key: elem,
      value: obj[elem],
    });
  });
  result2.sort((a, b) => (a.key > b.key ? 1 : -1));
  const resultArr = [...result1, ...result2];
  return resultArr;
}
