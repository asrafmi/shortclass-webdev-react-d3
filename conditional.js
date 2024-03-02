let people = 'Anas';
if (people === 'Anas') {
  console.log('Hello Anas');
}

let nilaiNumber = 95; //tipe data number
let nilaiString = '95'; //tipe data string
if (nilaiNumber === nilaiString) {
  console.log('Selamat, Anda lulus');
}

let ipk = 3.5;
let kkm = 3.5;
if (ipk >= kkm) {
  console.log('Selamat, Anda lulus');
} else {
  console.log('Maaf, Anda tidak lulus');
}

// buatlah function untuk menentukan apakah mahasiswa tersebut lulus atau tidak
function cekLulus(ipk, kkm, nama) {
  if (ipk >= kkm) {
    return `Selamat ${nama}, Anda lulus!`;
  } else {
    return `Maaf ${nama}, Anda tidak lulus :(`;
  }
}

console.log(cekLulus(3.5, 3.5, 'Anas'));
console.log(cekLulus(3.2, 3.5, 'Asraf'));

// buatlah function untuk menentukan apakah mahasiswa tersebut lulus dengan predikat Luar biasa, Cukup, atau Tidak lulus
function cekPredikat(ipk, nama) {
  const kkm = 3.5;
  const cukup = 3;
  if (ipk > kkm) {
    return `Selamat ${nama}, Anda lulus dengan predikat Luar Biasa!`;
  } else if (ipk < kkm && ipk > cukup) {
    return `Selamat ${nama}, Anda lulus dengan predikat Cukup!`;
  } else {
    return `Maaf ${nama}, Anda tidak lulus :(`;
  }
}

console.log(cekPredikat(3.6, 'Anas'));
console.log(cekPredikat(3.2, 'Fathan'));
console.log(cekPredikat(2, 'Asraf'));

function cekAngka(a, b) {
  if (a === b) {
    console.log(`${a} adab
    b
    blah ${b}`);
  } else {
    if (a > b) {
      console.log(`${a} lebih besar dari ${b}`);
    } else {
      console.log(`${a} lebih kecil dari ${b}`);
    }
  }
}

cekAngka(15, 10);
cekAngka(10, 5);
cekAngka(5, 100);

console.log('---------------------');

//buatlah function untuk menentukan apakah itu termasuk buah apel, mangga, atau jeruk
function cekBuah(buah) {
  switch (buah) {
    case 'apel':
      console.log('Ini adalah buah apel');
      break;
    case 'mangga':
      console.log('Ini adalah buah mangga');
      break;
    case 'jeruk':
      console.log('Ini adalah buah jeruk');
      break;
    default:
      console.log('Maaf, buah tidak ditemukan');
      break;
  }
}

cekBuah('apel');
cekBuah('mangga');
cekBuah('jeruk');
cekBuah('semangka');
