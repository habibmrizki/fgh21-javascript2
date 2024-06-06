const searchName = function (keyword, limit, cb) {
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

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  let searchResult = [];

  for (let i = 0; i < names.length; i++) {
    const personName = names[i];
    let result = "";

    for (let i = 0; i < personName.length; i++) {
      let convert = false;
      for (let j = 0; j < uppercase.length; j++) {
        if (convert === false) {
          if (personName[i] === uppercase[j]) {
            result += lowercase[j];
            convert = true;
          }

          if (j === 25) {
            if (personName[i] !== uppercase[j]) {
              result += personName[i];
              convert = true;
            }
          }
        }
      }
    }

    let isFound = false;
    for (let i = 0; i < result.length; i++) {
      let segment = "";
      for (let j = i; j < keyword.length + i; j++) {
        if (result[j] !== undefined) {
          segment += result[j];
        }
      }
      if (segment === keyword) {
        isFound = true;
      }
    }

    if (isFound === true) {
      searchResult = [...searchResult, personName];
    }
  }
  cb(searchResult, limit);
};

function limitResult(arr, lim) {
  let result = [];
  for (let i = 0; i < lim; i++) {
    if (arr[i]) {
      result = [...result, arr[i]];
    }
  }
  console.log(result);
}

searchName("an", 2, limitResult);
searchName("ca", 2, limitResult);

// const names = [
//   "Abigail",
//   "Alexandra",
//   "Alison",
//   "Amanda",
//   "Angela",
//   "Bella",
//   "Carol",
//   "Caroline",
//   "Carolyn",
//   "Deirdre",
//   "Diana",
//   "Elizabeth",
//   "Ella",
//   "Faith",
//   "Olivia",
//   "Penelope",
// ];

// const keyword = "an";
// const limit = 3;

// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercase = "abcdefghijklmnopqrstuvwxyz";
// let searchResult = [];

// const

// for (let i = 0; i < names.length; i++) {
//   const personName = names[i];
//   let result = "";

//   for (let i = 0; i < personName.length; i++) {
//     let convert = false;
//     for (let j = 0; j < uppercase.length; j++) {
//       if (convert === false) {
//         if (personName[i] === uppercase[j]) {
//           result += lowercase[j];
//           convert = true;
//         }

//         if (j === 25) {
//           if (personName[i] !== uppercase[j]) {
//             result += personName[i];
//             convert = true;
//           }
//         }
//       }
//     }
//   }

//   let isFound = false;
//   for (let i = 0; i < result.length; i++) {
//     let segment = "";
//     for (let j = i; j < keyword.length + i; j++) {
//       if (result[j] !== undefined) {
//         segment += result[j];
//       }
//     }
//     if (segment === keyword) {
//       isFound = true;
//     }
//   }

//   if (isFound === true) {
//     searchResult = [...searchResult, personName];
//   }
// }
// console.log(searchResult);
