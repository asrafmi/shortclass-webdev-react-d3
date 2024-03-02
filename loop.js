// For loop
console.log('---------------------');
console.log('For Loop');
const namaSiswa = ['Anas', 'Budi', 'Caca'];
// console.log(namaSiswa[2]); //array indexing

// buatlah function untuk menjumlahkan semua angka di dalam array
function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    hasil = hasil + arguments[i];
  }
  return hasil;
}

// tambah(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(tambah(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

for (let i = 0; i < 100; i++) {
  console.log(`${i + 1}. I love javascript\n`);
}

// While loop
console.log('---------------------');
console.log('While Loop');
let i = 0;
while (i < 100) {
  console.log(`${i + 1}. I love javascript\n`);
  i++;
}

// Do while loop
console.log('---------------------');
console.log('Do While Loop');
let j = 0;
do {
  console.log(`${j + 1}. I love javascript\n`);
  j++;
}
while (j < 100);
