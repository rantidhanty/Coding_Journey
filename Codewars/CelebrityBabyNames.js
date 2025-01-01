function validName(array) {
  if (array.length === 0) {
    return "You must test at least one name.";
  }
  if (array.length === 1) {
    return "Congratulations, you can choose any name you like!";
  }
  for (let i = 1; i < array.length; i++) {
    const prevName = array[i - 1].replace(/[-\s]/g, "");
    const currName = array[i].replace(/[-\s]/g, "");

    const lastLetter = prevName[prevName.length - 1].toLowerCase();
    const firstLetter = currName[0].toLowerCase();
    if (lastLetter !== firstLetter) {
      return "Back to the drawing board, your baby names are not compatible.";
    }
  }
  return "Congratulations, your baby names are compatible!";
}

console.log(validName(["John", "nick"]));