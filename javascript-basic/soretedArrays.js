const nthSmallest = (...arrays) => {
  const n = arrays.pop();
  console.log(n);
  const mergeArray = arrays.flat();
  console.log(mergeArray);
  mergeArray.sort((a, b) => a - b);
  console.log(mergeArray);
  const result = mergeArray[n - 1];
  console.log("Hasil elemen ke-" + n + ":", result);
};

console.log(nthSmallest([1, 2, 4, 8], [7, 8, 2, 1], 7));
