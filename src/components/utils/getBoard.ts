export default function getBoard(dimension: number) {
  const arr = [];

  for (let i = 0; i < dimension; i++) {
    const sub = new Array(dimension).fill("");
    arr.push(sub);
  }
  return arr;
}
