// Variables


console.log('-------------------');
console.log('Global Scope')
// Global Scope
// 1. var

console.log('1. var');
var bootcamp = 'Productzilla';
console.log('sebelum block',bootcamp);
if (true) {
  var bootcamp = 'Academy';
}
var bootcamp = 'Academy 2';
console.log('setelah block',bootcamp);
console.log('-------------------');
// 2. let
console.log('2. let');
let orang = 'Anas';
console.log('ini variable let sebelum block',orang);
if (true) {
  let orang = 'Budi';
  console.log('ini variable let di dalam block',orang);
}
console.log('ini variable let di luar block',orang);
console.log('-------------------');
// 3. const
console.log('3. const');
const peserta = 100;
console.log('ini variable const di luar block',peserta);
if (true) {
  const peserta = 200;
  console.log('ini variable const di dalam block',peserta);
}
console.log('ini variable const di luar block',peserta);

console.log('-------------------');
console.log('Global Property')
// Global Property
// 1. var
console.log('1. var');
var kampus = 'Telkom University';
console.log('var', window.kampus);
// 2. let
console.log('2. let');
let fakultas = 'Fakultas Ilmu Terapan';
console.log('let', window.fakultas);
// 3. const
console.log('3. const');
const jurusan = 'Teknik Informatika';
console.log('const', window.jurusan);

console.log('-------------------');
console.log('Reassignable')
// Reassignable
// 1. var
console.log('1. var');
var nama = 'Fathan';
console.log('sebelum reassign',nama);
nama = 'Fathan Rohman';
console.log('setelah reassign',nama);
// 2. let
console.log('2. let');
let nama2 = 'Omar';
console.log('sebelum reassign',nama2);
nama2 = 'Omar Faruk';
console.log('setelah reassign',nama2);
// 3. const
console.log('3. const');
const nama3 = 'Feby';
console.log('sebelum reassign',nama3);
// nama3 = 'Feby Rahma'; // Error

console.log('-------------------');
console.log('Redeclarable')
// Redeclarable
// 1. var
console.log('1. var');
var nama4 = 'Asraf';
console.log('sebelum redeclare',nama4);
var nama4 = 'Asraf Muhammad';
console.log('setelah redeclare',nama4);
// 2. let
console.log('2. let');
let nama5 = 'Rizky';
console.log('sebelum redeclare',nama5);
// let nama5 = 'Rizky Ramadhan'; //Error
console.log('setelah redeclare',nama5); // Error
// 3. const
console.log('3. const');
const nama6 = 'Firman';
console.log('sebelum redeclare',nama6);
// const nama6 = 'Firman Ramadhan'; // Error
console.log('setelah redeclare',nama6); // Error

var nama4 = 'Ngatimin';