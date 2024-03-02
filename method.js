// Procedure
function greeting() {
  console.log('Hello, World!');
}

greeting();

// Procedure
function greeting2(name) {
    console.log(`Hello, ${name}!`); //template literal
}

greeting2('Anas');

// Function
function greeting3(name, message) {
    return `Selamat Siang, ${name}! ${message}`;
}

console.log(greeting3('Fathan', 'Semangat belajar!'));
console.log(greeting3('Fathan', 'Semangat belajar!', 'Semangat!', 'Semangat!'));

function tambah() {
    let hasil = Array.from(arguments).reduce((total, current) => total + current, 0);
    return hasil;
}

console.log(tambah(2, 3, 4));