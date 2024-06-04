const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function searchName(parameter, limit, callback) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().indexOf(parameter.toLowerCase()) > -1) {
      result.push(names[i]);
      if (result.length == limit) {
        break;
      }
    }
  }
  callback(result);
}

function printNama(result) {
  console.log(result);
}
searchName("an", 3, printNama);
