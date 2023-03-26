const searchNum = (nilaiAwal, nilaiAkhir, dataArray) => {
  let hasil;
  if (typeof nilaiAwal === "number" && typeof nilaiAkhir === "number") {
    if (dataArray.length < 5) {
      console.log("Jumlah angka dalam data array harus lebih dari 5");
    } else if (nilaiAwal > nilaiAkhir) {
      console.log("nilai awal harus lebih kecil dari pada nilai akhir");
    } else {
      hasil = dataArray.filter(
        (value) => value > nilaiAwal && value < nilaiAkhir
      );
      if (hasil.length) {
        console.log(hasil);
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
searchNum(2, 9, [4, 5, 8, 6]); // Jumlah angka dalam data array harus lebih dari 5
searchNum(7, 2, [4, 5, 8, 6, 9, 4, 6, 4, 9, 9]); // nilai awal harus lebih kecil dari pada nilai akhir
searchNum(12, 14, [4, 5, 8, 6, 9, 4, 6, 4, 9, 9]); // Data tidak ada
searchNum('a', 9, [4, 5, 7, 6, 9, 4, 6, 4, 9, 9]); // nilai harus angka
