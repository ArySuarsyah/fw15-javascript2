// pebedaan var, let dan const

// Var menganut sistem functional scope, yang mana variabelnya dapat diakses dari dalam maupun dari luar block kecuali di luar function
// Let dan Const menganut sistem block scope, yang mana cakupan variabelnya hanya bisa diakses di dalam blocknya saja.
// data pada let dan var bisa diubah, sedangkan data pada variabel const tidak dapat diubah




// built in functions Javascript


// 1. Push
// Method array push() berfungsi untuk menambahkan satu atau lebih elemen ke akhir array, method ini mengembalikan panjang array baru.

// exm
// const word = ['mangga', 'anggur'];
// const newWord = mahasiswa.push('apel', 'lemon'); 

// console.log(word); // ['mangga', 'anggur', 'apel', 'lemon']
// console.log(newWord); // 4



// 2. Pop()
// pop merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.JavaScript. Method ini mengubah panjang array dan mengembalikan elemen yang dihapus

// exm
// const word = ['mangga', 'anggur', 'apel'];
// const newWord = word.pop();

// console.log(word); // ['mangga', 'anggur']
// console.log(newWord); // apel



// 3.unshift() 
// merupakan method array di JavaScript yang berfungsi untuk menambahkan satu atau lebih elemen baru ke awal array. Method ini mengembalikan panjang array baru.

// exm
// const word = ['mangga', 'anggur'];
// const newWord = word.unshift('apel', 'lemon');

// console.log(word); // [ 'apel', 'lemon', 'mangga', 'anggur' ]
// console.log(newWord); // 4



// 4.shift() 
// merupakan method array di JavaScript yang berfungsi untuk menghapus elemen pertama dari array. Method ini mengembalikan elemen yang dihapus dan mengubah panjang array.

// exm
// const word = ['mangga', 'anggur', 'apel'];
// const newWord = word.shift();

// console.log(word); // [ 'anggur', 'apel']
// console.log(newWord); // mangga


// 5. slice() 
// Merupakan method array di JavaScript yang berfungsi menyalin sebagian elemen array ke array baru. Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir. Method ini tidak mengubah array asli.


// const hewan = ['kucing', 'bebek', 'ayam', 'kambing', 'semut'];
// const hewanBaru = hewan.slice(1, 4);
// console.log(hewanBaru); // [ 'bebek', 'ayam', 'kambing' ]
// console.log(hewan); // const hewan = ['kucing', 'bebek', 'ayam', 'kambing', 'semut'];


// 6. map()
// Merupakan method array di JavaScript yang mengembalikan array baru berisi elemen yang dikembalikan oleh fungsi callback.

// exm
// const numbers = [5, 8, 7, 3, 4, 9];
// const numbersMultiplyTwo = numbers.map((number) => number * 2);

// console.log(numbersMultiplyTwo); // [ 10, 16, 14, 6, 8, 18 ]
// console.log(numbers); // [ 5, 8, 7, 3, 4, 9 ]


// 7. includes 
// Merupakan method array yang berfungsi untuk mengetahui apakah sebauh array mengandung nilai tertentu atau tidak, mengembalikan nilai true jika ya atau false jika tidak.


// exm
// const buah = ["mangga", "pisang", "apel"];

// const apel = buah.includes("apel");
// const anggur = buah.includes("anggur");

// console.log(apel); // true
// console.log(anggur); // false



// 8. every
// method yang berfungsi untuk menentukan apakah elemen dalam sebuah array memenuhi kriteria tertentu, every akan mengembalikan nilai true jika semua elemen dalam array sesuai dengan kriteria.

// cara penggunaan 
// const arr = [1, 2, 3, 4];
// arr.every((x) => x < 7) // true



// 9. some
// hampir sama dengan every, method ini berfungsi untuk menentukan apakah sebuah array memiliki kriteria tertentu, akan tetapi some akan mengembalikan nilai true ketika salah satu elemen dalam array sesuai dengan kriteria.

// cara penggunaan
// const source = [12, 55, 6, 10, 9, 70];
// source.some((x) => x < 7); // output true



// 10. concat
// Method concat berfungsi untuk menggabungkan dua atau lebih array menjadi satu array baru. Method ini tidak mengubah array sumber, tapi mengembalikan array baru.


// exm
// const arr1 = ["a", "b", "c"];
// const arr2 = [1, 2, 3];

// const arr3 = arr1.concat(arr2);

// console.log(arr3);