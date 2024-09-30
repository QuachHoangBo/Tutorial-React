// .Destructuring Objects

// The old way:
// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26
// With destructuring:
const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const {name:ten,age} = person;
// name:ten để sử dụng khi gán biến
console.log(ten); //Eric
console.log(age); //26
// Đối với đối tượng thì lấy dựa theo thuộc tính trong đối tượng ko quan trọng vị trí
// 3.Destructing Arrays
const city = [ "ha noi", "da nang","sai gon","ca mau"];
// old way
// const hanoi = city [0];
// const danang = city [1];
// const hcm = city [2];
//With destructuring:
const [hanoi,danang,,hcm] = city;
console.log(hanoi); //ha noi
// Đối với mãng thì lấy dựa theo vị trí trong mãng
