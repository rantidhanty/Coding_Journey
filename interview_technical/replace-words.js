/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dictionary, sentence) {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (dictionary[j] && arr[i].startsWith(dictionary[j])) {
        arr[i] = dictionary[j];
      }
    }
  }

  return arr.join(" ");
};
console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));