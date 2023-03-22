const searchNum = (nilaiAwal, nilaiAkhir, dataArray) => {
  let hasil;
  if (typeof nilaiAwal === "number" && typeof nilaiAkhir === "number") {
    if (dataArray.length < 5) {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else if (nilaiAwal > nilaiAkhir) {
      console.log("nilaiAwal harus lebih kecil dari pada nilaiAkhir");
    } else {
      hasil = dataArray.filter(
        (value) => value > nilaiAwal && value < nilaiAkhir
      );
      if (hasil.length) {
        console.log(hasil.sort());
      } else {
        console.log("Data tidak ada");
      }
    }
  } else {
    console.log("Nilai harus angka");
  }
};

searchNum(2, 7, [4, 5, 8, 6, 9, 4, 6, 4, 9, 12]); // [ 4, 4, 4, 5, 6, 6 ]
searchNum(2, 9, [4, 5, 8, 6]); // Jumlah angka dalam dataArray harus lebih dari 5
searchNum(7, 2, [4, 5, 8, 6, 9, 4, 6, 4, 9, 9]); // nilaiAwal harus lebih kecil dari pada nilaiAkhir
searchNum(12, 14, [4, 5, 8, 6, 9, 4, 6, 4, 9, 9]); // Data tidak ada
searchNum('a', 9, [4, 5, 7, 6, 9, 4, 6, 4, 9, 9]); // nilai harus angka
