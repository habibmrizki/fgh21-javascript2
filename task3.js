const seleksiNilai = function (nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) {
    console.log("nilai Akhir harus lebih besar dari nilaiAwal");
  }

  if (dataArray.length <= 5) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  }

  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    const num = dataArray[i];
    if (num > nilaiAwal) {
      if (num < nilaiAkhir) {
        result = [...result, num];
      }
    }
  }
  if (result.length === 0) {
    console.log("Nilai tidak ditemukan");
  } else {
    let len = result.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
  }
  console.log(result);
};
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 38, 8]);
seleksiNilai(4, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
